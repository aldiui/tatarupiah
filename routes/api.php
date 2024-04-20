<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['decrypt.token'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::match(['get', 'put'], 'user', [UserController::class, 'index']);
    Route::post('user/image', [UserController::class, 'updateImage']);
    Route::put('user/password', [UserController::class, 'updatePassword']);
});