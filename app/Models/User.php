<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Kategori;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Scout\Searchable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable, Searchable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'email_verified_at',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn($image) => url('/storage/users/' . $image),
        );
    }

    public function toSearchableArray(): array
    {
        return [
            'nama' => $this->nama,
            'email' => $this->email,
        ];
    }

    public function kategoris()
    {
        return $this->hasMany(Kategori::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function toArray()
    {
        $array = parent::toArray();

        $array['nama_toko'] = $array['nama_toko'] ?? '';
        $array['no_handphone'] = $array['no_handphone'] ?? '';
        $array['alamat'] = $array['alamat'] ?? '';

        return $array;
    }
}
