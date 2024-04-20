<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    use ApiResponder;
    public function index(Request $request)
    {
        $user = $request->user();
        if ($request->isMethod('put')) {
            $validator = Validator::make($request->all(), [
                'nama' => 'required',
                'nama_toko' => 'required',
                'no_handphone' => 'required|string|unique:users,no_handphone,' . $user->id,
                'email' => 'required|email|unique:users,email,' . $user->id,
                'alamat' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
            }

            $user->update($request->only('nama', 'email', 'no_handphone', 'nama_toko', 'alamat'));
            return $this->successResponse(null, 'Profil telah berhasil diperbarui.');
        }

        return $this->successResponse($user, 'Profil telah berhasil diambil.');
    }

    public function updateImage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:png,jpg,jpeg|max:5120',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $user = auth()->user();
        if ($user->image != 'default.png' && Storage::exists('public/users/' . $user->image)) {
            Storage::delete('public/users/' . $user->image);
        }
        $image = $request->file('image')->hashName();
        $request->file('image')->storeAs('public/users', $image);
        $user->update(['image' => $image]);

        return $this->successResponse(['image' => url('/storage/users/' . $image)], 'Foto Profil telah berhasil diperbarui.');
    }

    public function updatePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password_lama' => 'required',
            'password' => 'required',
            'konfirmasi_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $user = $request->user();

        if (!Hash::check($request->password_lama, $user->password)) {
            return $this->errorResponse(null, 'Password lama tidak cocok.', 422);
        }

        $user->update($request->only('password'));

        return $this->successResponse(null, 'Password telah berhasil diperbarui.');
    }

}