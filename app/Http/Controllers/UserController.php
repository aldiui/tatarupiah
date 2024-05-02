<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::search($request->search)
            ->when(function ($query) {
                return $query->where('role', 'user');
            })
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();

        return Inertia::render('User/Index', compact('users'));
    }

    public function edit($id)
    {
        $user = User::whereRole('user')->findOrFail($id);
        return Inertia::render('User/Edit', ['user' => $user]);
    }

    public function update(Request $request, $id)
    {
        $user = User::whereRole('user')->findOrFail($id);

        $request->validate([
            'nama' => 'required|min:4',
            'nama_toko' => 'required|min:4',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'no_handphone' => 'required|string|between:10,13|unique:users,no_handphone,' . $user->id,
            'alamat' => 'nullable',
            'password' => 'nullable|min:8',
            'password_confirmation' => 'nullable|same:password',
        ]);

        $user->update([
            'nama' => $request->nama,
            'nama_toko' => $request->nama_toko,
            'email' => $request->email,
            'no_handphone' => $request->no_handphone,
            'alamat' => $request->alamat,
            'password' => $request->password ? $request->password : $user->password,
        ]);

        return redirect()->route('user.index')->with('success', 'User berhasil diperbarui');

    }

    public function destroy($id)
    {
        $user = User::whereRole('user')->findOrFail($id);
        if (basename($user->image) != 'default.png' && Storage::exists('public/users/' . basename($user->image))) {
            Storage::delete('public/users/' . basename($user->image));
        }
        $user->delete();
        return redirect()->route('user.index')->with('success', 'User berhasil dihapus');
    }
}
