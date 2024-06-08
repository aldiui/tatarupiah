<?php

namespace App\Models;

use App\Models\SubKategori;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function subKategoris()
    {
        return $this->hasMany(SubKategori::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected $hidden = [
        'user_id',
    ];

}
