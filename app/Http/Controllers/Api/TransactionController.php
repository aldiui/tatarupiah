<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    use ApiResponder;

    public function index(Request $request)
    {
        $userTransactions = Transaction::where('user_id', auth()->user()->id);

        if ($request->has(['tanggal_mulai', 'tanggal_selesai'])) {
            if ($request->has('tanggal_mulai') && $request->has('tanggal_selesai')) {
                $custom = [
                    'pemasukan_normal' => $userTransactions->where('type', 'Pemasukan')->where('mode', 'Normal')->whereBetween('tanggal', [$request->tanggal_mulai, $request->tanggal_selesai])->get(),
                    'pemasukan_kasir' => $userTransactions->where('type', 'Pemasukan')->where('mode', 'Kasir')->whereBetween('tanggal', [$request->tanggal_mulai, $request->tanggal_selesai])->get(),
                    'pengeluaran' => $userTransactions->where('type', 'Pengeluaran')->whereBetween('tanggal', [$request->tanggal_mulai, $request->tanggal_selesai])->get(),
                ];
            } elseif ($request->has('tanggal_mulai')) {
                $custom = [
                    'pemasukan_normal' => $userTransactions->where('type', 'Pemasukan')->where('mode', 'Normal')->where('tanggal', $request->tanggal_mulai)->get(),
                    'pemasukan_kasir' => $userTransactions->where('type', 'Pemasukan')->where('mode', 'Kasir')->where('tanggal', $request->tanggal_mulai)->get(),
                    'pengeluaran' => $userTransactions->where('type', 'Pengeluaran')->where('tanggal', $request->tanggal_mulai)->get(),
                ];
            }

            return $this->successResponse($custom ?? null, 'Transaksi berhasil diambil.');
        }

        $transactions = [
            'pemasukan_normal' => $userTransactions->where('type', 'Pemasukan')->where('mode', 'Normal')->get(),
            'pemasukan_kasir' => $userTransactions->where('type', 'Pemasukan')->where('mode', 'Kasir')->get(),
            'pengeluaran' => $userTransactions->where('type', 'Pengeluaran')->get(),
        ];

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
            'mode' => $request->mode,
            'nominal_penjualan' => $request->nominal_penjualan ?? 0,
            'nominal_pengeluaran' => $request->nominal_pengeluaran ?? 0,
            'qty' => $request->qty ?? 0,
            'catatan' => $request->catatan,
            'tanggal' => $request->tanggal,
        ]);

        return $this->successResponse($transaksi, 'Transaksi telah berhasil ditambahkan.');
    }

    private function getValidationRules($type, $mode)
    {
        $commonRules = [
            'tanggal' => 'required|date',
            'sub_kategori_id' => 'required|exists:sub_kategoris,id',
            'type' => 'required|in:Pemasukan,Pengeluaran',
            'mode' => 'required|in:Normal,Kasir',
            'catatan' => 'nullable',
        ];

        $specificRules = [];

        if ($type == 'Pemasukan' && $mode == 'Normal') {
            $specificRules = [
                'nominal_penjualan' => 'required|numeric',
                'nominal_pengeluaran' => 'required|numeric',
                'qty' => 'nullable',
            ];
        } elseif ($type == 'Pengeluaran' && $mode == 'Normal') {
            $specificRules = [
                'nominal_penjualan' => 'nullable',
                'nominal_pengeluaran' => 'required|numeric',
                'qty' => 'nullable',
            ];
        } elseif ($type == 'Pemasukan' && $mode == 'Kasir') {
            $specificRules = [
                'nominal_penjualan' => 'required|numeric',
                'nominal_pengeluaran' => 'nullable',
                'qty' => 'required|numeric',
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

    public function update(Request $request, $id)
    {
        $transaksi = Transaction::where('user_id', auth()->id())->find($id);

        if (!$transaksi) {
            return $this->errorResponse(null, 'Transaksi tidak ditemukan.', 404);
        }

        $rules = $this->getValidationRules($request->type, $request->mode);

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $transaksi->update([
            'sub_kategori_id' => $request->sub_kategori_id,
            'type' => $request->type,
            'mode' => $request->mode,
            'nominal_penjualan' => $request->nominal_penjualan ?? 0,
            'nominal_pengeluaran' => $request->nominal_pengeluaran ?? 0,
            'qty' => $request->qty ?? 0,
            'catatan' => $request->catatan,
            'tanggal' => $request->tanggal,
        ]);

        return $this->successResponse($transaksi, 'Transaksi telah berhasil diubah.');
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
}
