<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Posts;

class comments extends Model
{
    use HasFactory;
    protected $fillable = [
        'text',
        'user_id',
        'post_id',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function Post(){
        return $this->belongsTo(Posts::class);
    }
}
