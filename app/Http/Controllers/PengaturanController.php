<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Pengaturan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PengaturanController extends Controller
{
    public function index(Request $request)
    {
        $pengaturan = Pengaturan::find(1);

        if ($request->isMethod('post')) {
            $request->validate([
                'key' => 'required',
            ]);

            $pengaturan->update($request->only('key'));

            return back()->with('success', 'Pengaturan berhasil diperbarui');
        }

        return Inertia::render('Pengaturan/Index', compact('pengaturan'));
    }
}
