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
        if ($this->type == 'Pemasukan' && $this->mode == 'Normal') {
            $array = [
                'id' => $this->id,
                'sub_kategori_id' => $this->subKategori_id,
                'sub_kategori' => $this->subKategori->nama,
                'icon' => $this->subKategori->icon,
                'tanggal' => $this->tanggal,
                'type' => $this->type,
                'mode' => $this->mode,
                'nominal_penjualan' => $this->nominal_penjualan,
                'nominal_pengeluaran' => $this->nominal_pengeluaran,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ];
        } elseif ($this->type == 'Pengeluaran' && $this->mode == 'Normal') {
            $array = [
                'id' => $this->id,
                'sub_kategori_id' => $this->subKategori_id,
                'sub_kategori' => $this->subKategori->nama,
                'icon' => $this->subKategori->icon,
                'tanggal' => $this->tanggal,
                'type' => $this->type,
                'mode' => $this->mode,
                'nominal_pengeluran' => $this->nominal_pengeluran,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ];
        } elseif ($this->type == 'Pemasukan' && $this->mode == 'Kasir') {
            $array = [
                'id' => $this->id,
                'sub_kategori_id' => $this->subKategori_id,
                'sub_kategori' => $this->subKategori->nama,
                'icon' => $this->subKategori->icon,
                'tanggal' => $this->tanggal,
                'type' => $this->type,
                'mode' => $this->mode,
                'harga_pokok' => $this->subKategori->nominal_pengeluaran,
                'qty' => $this->qty,
                'nominal_penjualan' => $this->nominal_penjualan,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ];
        } else {
            $array = parent::toArray();
        }

        return $array;
    }
}
