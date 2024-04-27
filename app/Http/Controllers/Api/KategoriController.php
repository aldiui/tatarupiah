<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Kategori;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KategoriController extends Controller
{
    use ApiResponder;

    public function index()
    {
        $kategoris = Kategori::where('user_id', auth()->user()->id)->get();

        if (!$kategoris) {
            return $this->errorResponse(null, 'Kategori tidak ditemukan.', 404);
        }

        return $this->successResponse($user, 'Kategori telah berhasil diambil.');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $user = auth()->user();

        $kategori = Kategori::create([
            'user_id' => $user->id,
            'nama' => $request->nama,
        ]);

        return $this->successResponse($user, 'Kategori telah berhasil ditambahkan.');
    }

    public function show($id)
    {
        $kategori = Kategori::with('subKategoris')->where('user_id', auth()->user()->id)->find($id);

        if (!$kategori) {
            return $this->errorResponse(null, 'Kategori tidak ditemukan.', 404);
        }

        return $this->successResponse($user, 'Kategori telah berhasil diambil.');
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $kategori = Kategori::where('user_id', auth()->user()->id)->find($id);

        if (!$kategori) {
            return $this->errorResponse(null, 'Kategori tidak ditemukan.', 404);
        }

        $kategori->update($request->only('nama'));

        return $this->successResponse($user, 'Kategori telah berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $kategori = Kategori::where('user_id', auth()->user()->id)->find($id);

        if (!$kategori) {
            return $this->errorResponse(null, 'Kategori tidak ditemukan.', 404);
        }

        $kategori->delete();

        return $this->successResponse(null, 'Kategori telah berhasil dihapus.');
    }
}
