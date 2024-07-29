<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    // create new table need $fillable 
    protected $fillable = [
        'title',
        'description'

    ];
}
