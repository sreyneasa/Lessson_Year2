<?php

namespace App\Http\Controllers;

use App\Models\post;
use Illuminate\Http\Request;
use Exception;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $title = $request->title;
        $body = $request->body;

        $post = new Post();
        $post->title = $title;
        $post->body = $body;
        try{
            $post->save();
            return response()->json(["data"=>$post,"massage"=>"successfully to create post"],200);
        }catch(Exception $error){
            return response()->json(["data"=>$post,"massage"=>"fail to create post"],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, post $post)
    {
        $id = $post->id;
        $title = $request->title;
        $body = $request->body;

        $post = Post::where('id',$id) ->first();
        $post ->title = $title;
        $post ->body = $body;
        try{
            $post->save();
            return response()->json(["data"=>$post,"massage"=>"Update is successfully"],200);
        }catch(Exception $error){
            return response()->json(["data"=>$post,"massage"=>"fail to update post"],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $id = $post->id;
        try{
            Post::destroy($id);
            return response()->json(["data" => $post,"message"=>"succfully to delete the post"],200);
        }catch(Exception $erorr){
            return response()->json(["data" => $post,"message"=>"failed to delete this post"],500);
        }
    }
}
