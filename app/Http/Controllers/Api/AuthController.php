<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    use ApiResponder;
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|min:4',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'konfirmasi_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $user = User::create($request->only('nama', 'email', 'password'));

        $userToken = auth()->guard('api')->login($user);
        $token = Crypt::encrypt($userToken);
        return $this->successResponse(compact('token'), 'Registrasi berhasil.', 201);

    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 'Data tidak valid.', 422);
        }

        $credentials = $request->only('email', 'password');

        if (!$userToken = auth()->guard('api')->attempt($credentials)) {
            return $this->errorResponse(null, 'Invalid credentials', 401);
        }

        $token = Crypt::encrypt($userToken);
        return $this->successResponse(compact('token'), 'Login berhasil.', 200);
    }

    public function logout(Request $request)
    {
        $token = JWTAuth::getToken();

        if (!$token) {
            return $this->errorResponse(null, 'Token Kedaluwarsa.', 401);
        }

        JWTAuth::invalidate($token);
        return $this->successResponse(null, 'Logout berhasil.');
    }
}
