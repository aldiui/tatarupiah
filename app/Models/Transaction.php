<?php

namespace App\Models;

use App\Models\SubKategori;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected $hidden = [
        'user_id',
    ];

    public function subKategori()
    {
        return $this->belongsTo(SubKategori::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function toArray()
    {
        $array = [
            'id' => $this->id,
            'sub_kategori_id' => $this->subKategori_id,
            'sub_kategori' => $this->subKategori->nama,
            'kategori' => $this->subKategori->kategori->nama,
            'icon' => $this->subKategori->icon,
            'tanggal' => $this->tanggal,
            'type' => $this->type,
            'mode' => $this->mode,
            'qty' => $this->qty,
            'nominal_penjualan' => $this->nominal_penjualan,
            'nominal_pengeluaran' => $this->nominal_pengeluaran,
            'catatan' => $this->catatan,
            'pembayaran' => $this->pembayaran,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];

        return $array;
    }
}