<?php

namespace App\Models;
use Exception;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'body'
    ];
    function createPost($title, $body){
        $post = new Post();
        $post->title = $title;
        $post->body = $body;
        try{
            $post->save();
        }catch(Exception $error){
            return $error;
        }
    }

    function updatePost($id, $title, $body){
        $post = Post::where('id',$id)->first();
        $post->title = $title;
        $post->body = $body;
        try{
            $post->save();
        }catch(Exception $error){
            return $error;
        }
    }

    function deletePost($id){
        $post = Post::where('id',$id)->first();
        try{
            $post->delete();
        }catch(Exception $error){
            return $error;
        }
    }
}