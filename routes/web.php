<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PengaturanController;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    $data = [
        'user' => User::whereRole('user')->count(),
    ];
    return Inertia::render('Dashboard', compact('data'));
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/user', UserController::class)->names('user');
    Route::match(['get', 'post'], '/pengaturan', [PengaturanController::class, 'index'])->name('pengaturan');

});

Route::get('/storage-link', function () {
    Artisan::call('storage:link');
});

require __DIR__ . '/auth.php';