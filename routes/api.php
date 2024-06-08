<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\KategoriController;
use App\Http\Controllers\Api\SubKategoriController;
use App\Http\Controllers\Api\TransactionController;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['decrypt.token'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::match(['get', 'put'], 'user', [UserController::class, 'index']);
    Route::post('user/image', [UserController::class, 'updateImage']);
    Route::put('user/password', [UserController::class, 'updatePassword']);
    Route::apiResource('kategori', KategoriController::class);
    Route::apiResource('sub-kategori', SubKategoriController::class);
    Route::apiResource('transaction', TransactionController::class);
});