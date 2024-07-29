<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Exception;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        return response()->json(["data"=> $posts::all(),"message" => "Resquest has been successfully"],200,);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $title = $request->title;
        $body = $request->body;
        $post = new Post();
        
        try{
            $post->createPost($title, $body);
            return response()->json(["data" => $post,"message"=>"succfully to create the post"],200);
        }catch(Exception $error){
            return response()->json(["data" => $post,"message"=>"failed to create this post"],500);
        }
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $id = $post->id;
        $title = $request->title;
        $body = $request->body;
        
        $post = Post::where('id',$id)->first();
        try{
            $post->updatePost($id, $title, $body);
            return response()->json(["data" => $post,"message"=>"update successfully the post"],200);
        }catch(Exception $error){
            return response()->json(["data" => $post,"message"=>"failed to update this post"],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $id = $post->id;
        try{
            $post->deletePost($id);
            return response()->json(["data" => $post,"message"=>"succfully to delete the post"],200);
        }catch(Exception $erorr){
            return response()->json(["data" => $post,"message"=>"failed to delete this post"],500);
        }
    }
}
