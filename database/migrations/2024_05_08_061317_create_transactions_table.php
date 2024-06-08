<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('sub_kategoris_id');
            $table->date('tanggal');
            $table->bigInteger('nominal');
            $table->unsignedBigInteger('qty')->nullable();
            $table->text('catatan')->nullable();
            $table->enum('type', ['Pemasukan', 'Pengeluaran'])->default('Pemasukan');
            $table->enum('mode', ['Kasir', 'Normal'])->default('Normal');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('sub_kategoris_id')->references('id')->on('sub_kategoris')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
