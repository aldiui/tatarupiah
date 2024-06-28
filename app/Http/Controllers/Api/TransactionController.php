<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Traits\ApiResponder;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    use ApiResponder;

    public function index(Request $request)
    {
        $userTransactions = Transaction::where('user_id', auth()->user()->id);

        if ($request->has(['tanggal_mulai', 'tanggal_selesai'])) {
            if ($request->has('tanggal_mulai') && $request->has('tanggal_selesai')) {
                $transactions = $userTransactions->whereBetween('tanggal', [$request->tanggal_mulai, $request->tanggal_selesai])->get();
            } elseif ($request->has('tanggal_mulai')) {
                $transactions = $userTransactions->where('tanggal', $request->tanggal_mulai)->get();
            }

            return $this->successResponse($transactions ?? null, 'Transaksi berhasil diambil.');
        }

        $transactions = Transaction::where('user_id', auth()->user()->id)->get();
        return $this->successResponse($transactions, 'Transaksi berhasil diambil.');
    }

    public function store(Request $request)
    {
        $rules = $this->getValidationRules($request->type, $request->mode);

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $user = auth()->user();

        $transaksi = Transaction::create([
            'user_id' => $user->id,
            'sub_kategori_id' => $request->sub_kategori_id,
            'type' => $request->type,
            'mode' => "Normal",
            'nominal_penjualan' => $request->nominal_penjualan ?? 0,
            'nominal_pengeluaran' => $request->nominal_pengeluaran ?? 0,
            'qty' => 0,
            'catatan' => $request->catatan,
            'tanggal' => $request->tanggal,
            'pembayaran' => $request->pembayaran,
        ]);

        return $this->successResponse($transaksi, 'Transaksi telah berhasil ditambahkan.');
    }
    public function storeKasir(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tanggal' => 'required|date',
            'pembayaran' => 'required',
            'catatan' => 'nullable',
            'items' => 'required|array',
            'items.*.nominal_penjualan' => 'required|numeric',
            'items.*.qty' => 'nullable',
            'items.*.sub_kategori_id' => 'required|exists:sub_kategoris,id',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $items = $request->input('items');

        $insertedIds = [];

        DB::transaction(function () use ($request, $items, &$insertedIds) {
            foreach ($items as $item) {
                $insertedIds[] = Transaction::insertGetId([
                    'tanggal' => $request->input('tanggal'),
                    'type' => 'Pemasukan',
                    'mode' => 'Kasir',
                    'pembayaran' => $request->input('pembayaran'),
                    'catatan' => $request->input('catatan'),
                    'nominal_penjualan' => $item['nominal_penjualan'],
                    'qty' => $item['qty'],
                    'sub_kategori_id' => $item['sub_kategori_id'],
                    'user_id' => auth()->user()->id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        });

        $insertedTransactions = Transaction::whereIn('id', $insertedIds)->get();

        return $this->successResponse($insertedTransactions, 'Transaksi kasir telah ditambahkan.');
    }

    private function getValidationRules($type, $mode)
    {
        $commonRules = [
            'tanggal' => 'required|date',
            'sub_kategori_id' => 'required|exists:sub_kategoris,id',
            'type' => 'required|in:Pemasukan,Pengeluaran',
            'catatan' => 'nullable',
            'pembayaran' => 'required',
        ];

        $specificRules = [];

        if ($type == 'Pemasukan') {
            $specificRules = [
                'nominal_penjualan' => 'required|numeric',
                'nominal_pengeluaran' => 'required|numeric',
            ];
        } elseif ($type == 'Pengeluaran') {
            $specificRules = [
                'nominal_penjualan' => 'nullable',
                'nominal_pengeluaran' => 'required|numeric',
            ];
        }

        return array_merge($commonRules, $specificRules);
    }

    public function show($id)
    {
        $transaksi = Transaction::where('user_id', auth()->id())->find($id);

        if (!$transaksi) {
            return $this->errorResponse(null, 'Transaksi tidak ditemukan.', 404);
        }

        return $this->successResponse($transaksi, 'Transaksi telah berhasil diambil.');
    }

    public function destroy($id)
    {
        $transaksi = Transaction::where('user_id', auth()->id())->find($id);

        if (!$transaksi) {
            return $this->errorResponse(null, 'Transaksi tidak ditemukan.', 404);
        }

        $transaksi->delete();
        return $this->successResponse(null, 'Transaksi telah berhasil dihapus.');
    }

    public function barChart(Request $request)
    {
        $type = $request->input('type');
        $tanggal = $request->input('date');

        if (!$type || !$tanggal) {
            return $this->errorResponse(null, 'Data transaksi bar chart tidak valid.', 422);
        }

        try {
            $endDate = Carbon::parse($tanggal);
            $startDate = $endDate->copy()->subDays(6);

            $transactions = Transaction::whereBetween('tanggal', [$startDate, $endDate])
                ->selectRaw('DATE(tanggal) as date, SUM(nominal_penjualan) as total_pemasukan, SUM(nominal_pengeluaran) as total_pengeluaran')
                ->groupBy('date')
                ->orderBy('date')
                ->get();

            $data = $transactions->map(function ($item) use ($type) {
                $amount = 0;
                switch ($type) {
                    case 'Pemasukan':
                        $amount = $item->total_pemasukan;
                        break;
                    case 'Pengeluaran':
                        $amount = $item->total_pengeluaran;
                        break;
                    case 'Keuntungan':
                        $amount = $item->total_pemasukan - $item->total_pengeluaran;
                        break;
                }
                return [
                    'date' => $item->date,
                    'amount' => (int) $amount,
                ];
            });

            $result = collect();
            for ($date = $startDate->copy(); $date <= $endDate; $date->addDay()) {
                $dateString = $date->format('Y-m-d');
                $amount = $data->firstWhere('date', $dateString)['amount'] ?? 0;
                $result->push(['date' => $dateString, 'amount' => $amount]);
            }

            return $this->successResponse($result, 'Data transaksi bar chart telah berhasil diambil.');
        } catch (\Exception $e) {
            return $this->errorResponse(null, 'Terjadi kesalahan dalam pengambilan data: ' . $e->getMessage(), 500);
        }
    }

    public function multipleChart(Request $request)
    {
        $bulan = $request->input('bulan');
        $tahun = $request->input('tahun');

        if (!$bulan || !$tahun) {
            return $this->errorResponse(null, 'Data transaksi multiple chart tidak valid.', 422);
        }

        $transactions = Transaction::whereYear('tanggal', $tahun)
            ->whereMonth('tanggal', $bulan)
            ->where('user_id', auth()->id())
            ->selectRaw('WEEK(tanggal, 1) - WEEK(DATE_SUB(tanggal, INTERVAL DAYOFMONTH(tanggal) - 1 DAY), 1) + 1 as week, SUM(nominal_penjualan) as total_pemasukan, SUM(nominal_pengeluaran) as total_pengeluaran')
            ->groupBy('week')
            ->orderBy('week')
            ->get();

        $data = $transactions->map(function ($item) {
            $profit = $item->total_pemasukan - $item->total_pengeluaran;
            return [
                'week' => $item->week,
                'total_pemasukan' => $item->total_pemasukan,
                'total_pengeluaran' => $item->total_pengeluaran,
                'profit' => $profit,
            ];
        });

        $income = [];
        $expense = [];
        $profit = [];

        for ($i = 1; $i <= 4; $i++) {
            $weekData = $data->firstWhere('week', $i);

            $income[] = [
                'x' => $i - 1,
                'y' => $weekData ? (int) $weekData['total_pemasukan'] : 0,
            ];
            $expense[] = [
                'x' => $i - 1,
                'y' => $weekData ? (int) $weekData['total_pengeluaran'] : 0,
            ];
            $profit[] = [
                'x' => $i - 1,
                'y' => $weekData ? (int) $weekData['profit'] : 0,
            ];
        }

        $result = [
            'income' => $income,
            'expense' => $expense,
            'profit' => $profit,
        ];

        // $performaPenjualan = Transaction::selectRaw('sub_kategoris.nama as category, SUM(transactions.nominal_penjualan) as total_penjualan')
        //     ->join('sub_kategoris', 'transactions.sub_kategori_id', '=', 'sub_kategoris.id')
        //     ->whereYear('tanggal', $tahun)
        //     ->whereMonth('tanggal', $bulan)
        //     ->where('type', 'Pemasukan')
        //     ->where('user_id', auth()->id())
        //     ->groupBy('sub_kategoris.nama', 'transactions.sub_kategori_id')
        //     ->orderByRaw('total_penjualan DESC')
        //     ->take(5)
        //     ->get();

        $response = [
            'multiple_chart' => $result,
            'summary' => [
                'pemasukan' => $transactions->sum('total_pemasukan'),
                'pengeluaran' => $transactions->sum('total_pengeluaran'),
                'keuntungan' => $transactions->sum('total_pemasukan') - $transactions->sum('total_pengeluaran'),
            ],
            'performa_penjualan' => $performaPenjualan ?? [],
        ];

        return $this->successResponse($response, 'Data transaksi multiple chart telah berhasil diambil.');

    }

}