<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Kategori;
use App\Models\SubKategori;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubKategoriController extends Controller
{
    use ApiResponder;

    public function index()
    {
        $subKategoris = SubKategori::whereHas('kategori', function ($categoryQuery) {
            $categoryQuery->where('user_id', auth()->id());
        })->get();

        if (!$subKategoris) {
            return $this->errorResponse(null, 'Sub Kategori tidak ditemukan.', 404);
        }

        return $this->successResponse($subKategoris, 'Sub Kategori telah berhasil diambil.');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'kategori_id' => 'required|exists:kategoris,id',
            'nama' => 'required',
            'icon' => 'required',
            'nominal_penjualan' => 'required|numeric',
            'nominal_pengeluaran' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $kategori = Kategori::where('user_id', auth()->id())->where('id', $request->kategori_id)->first();

        if (!$kategori) {
            return $this->errorResponse(null, 'Kategori tidak ditemukan.', 404);
        }

        $cekSubKategori = SubKategori::whereHas('kategori', function ($categoryQuery) {
            $categoryQuery->where('user_id', auth()->id());
        })->where('nama', $request->nama)->first();

        if ($cekSubKategori) {
            return $this->errorResponse(null, 'Sub Kategori sudah ada.', 409);
        }

        $subKategori = SubKategori::create([
            'kategori_id' => $request->kategori_id,
            'nama' => $request->nama,
            'icon' => $request->icon,
            'nominal_penjualan' => $request->nominal_penjualan ?? 0,
            'nominal_pengeluaran' => $request->nominal_pengeluaran ?? 0,
        ]);

        return $this->successResponse($subKategori, 'Sub Kategori telah berhasil ditambahkan.');
    }

    public function show($id)
    {
        $subKategori = SubKategori::whereHas('kategori', function ($categoryQuery) {
            $categoryQuery->where('user_id', auth()->id());
        })->find($id);

        if (!$subKategori) {
            return $this->errorResponse(null, 'Sub Kategori tidak ditemukan.', 404);
        }

        return $this->successResponse($subKategori, 'Sub Kategori telah berhasil diambil.');
    }

    public function update(Request $request, $id)
    {
        $kategori = Kategori::where('user_id', auth()->id())->find($request->kategori_id);
        $validator = Validator::make($request->all(), [
            'kategori_id' => 'required|exists:kategoris,id',
            'nama' => 'required',
            'icon' => 'required',
            'nominal_penjualan' => 'required|numeric',
            'nominal_pengeluaran' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $kategori = Kategori::where('user_id', auth()->id())->find($request->kategori_id);

        $subKategori = SubKategori::whereHas('kategori', function ($categoryQuery) {
            $categoryQuery->where('user_id', auth()->id());
        })->find($id);

        if (!$subKategori) {
            return $this->errorResponse(null, 'Sub Kategori tidak ditemukan.', 404);
        }

        $subKategori->update($request->only('nama', 'icon', 'type', 'nominal_penjualan', 'nominal_pengeluaran'));

        return $this->successResponse($subKategori, 'Sub Kategori telah berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $subKategori = SubKategori::whereHas('kategori', function ($categoryQuery) {
            $categoryQuery->where('user_id', auth()->id());
        })->find($id);

        if (!$subKategori) {
            return $this->errorResponse(null, 'Sub Kategori tidak ditemukan.', 404);
        }

        $subKategori->delete();
        return $this->successResponse(null, 'Sub Kategori telah berhasil di hapus.');
    }
}
