<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SubKategori;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubKategoriController extends Controller
{
    use ApiResponder;

    public function index()
    {
        $subCategories = SubKategori::whereHas('kategori', function ($categoryQuery) {
            $categoryQuery->where('user_id', auth()->id());
        })->get();

        if (!$subKategoris) {
            return $this->errorResponse(null, 'Sub Kategori tidak ditemukan.', 404);
        }

        return $this->successResponse($user, 'Sub Kategori telah berhasil diambil.');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'kategori_id' => 'required|exists:kategoris,id',
            'nama' => 'required',
            'icon' => 'required',
            'type' => 'required|in:Pemasukan,Pengeluaran',
            'harga_pokok' => 'required|numeric',
            'harga_jual' => 'required_if:type,Pemasukan|numeric',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $subKategori = SubKategori::create([
            'kategori_id' => $request->kategori_id,
            'nama' => $request->nama,
            'icon' => $request->icon,
            'type' => $request->type,
            'harga_pokok' => $request->harga_pokok,
            'harga_jual' => $request->harga_jual ? $request->harga_jual : 0,
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

        return $this->successResponse($subCategori, 'Sub Kategori telah berhasil diambil.');
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'kategori_id' => 'required|exists:kategoris,id',
            'nama' => 'required',
            'icon' => 'required',
            'type' => 'required|in:Pemasukan,Pengeluaran',
            'harga_pokok' => 'required|numeric',
            'harga_jual' => 'required_if:type,Pemasukan|numeric',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $subKategori = SubKategori::whereHas('kategori', function ($categoryQuery) {
            $categoryQuery->where('user_id', auth()->id());
        })->find($id);

        if (!$subKategori) {
            return $this->errorResponse(null, 'Sub Kategori tidak ditemukan.', 404);
        }

        $subKategori->update($request->only('nama', 'icon', 'type', 'harga_pokok', 'harga_jual'));

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
