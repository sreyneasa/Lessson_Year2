<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $seeders = [
            ["name" =>"ny","email" =>"ny1@ny.com","password" =>"123"],
            ["name" =>"ny","email" =>"ny2@ny.com","password" =>"123"],
            ["name" =>"ny","email" =>"ny3@ny.com","password" =>"123"],
            ["name" =>"ny","email" =>"ny4@ny.com","password" =>"123"],
        ];
       foreach($seeders as $seed){
        User::create($seed);
       }
    }
}
