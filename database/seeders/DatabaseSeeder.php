<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Pengaturan;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $adminData = [
            [
                'nama' => 'Dimas',
                'email' => 'dimassalah10@gmail.com',
                'password' => '11221122',
                'role' => 'admin',
            ],
            [
                'nama' => 'Ichayuli',
                'email' => 'ichayuliarahma81@gmail.com',
                'password' => '11221122',
                'role' => 'admin',
            ],
        ];

        foreach ($adminData as $data) {
            User::create($data);
        }

        Pengaturan::create([
            'key' => 'admin_email',
        ]);
    }
}