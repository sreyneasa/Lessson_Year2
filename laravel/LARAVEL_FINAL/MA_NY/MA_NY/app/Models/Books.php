<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\BorrowRecords;

class Books extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'author',
        'genre',
        'published_year',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function borrow_records(){
        return $this->hasMany(BorrowRecords::class);
    }
}
