<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Post;
// use Dotenv\Validator;
use Illuminate\Support\Facades\Validator;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        return response()->json(["data" => $posts, "Messages" => "Request has been successfully"], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = validator::make($request->all(),[
            'title' => 'required|max:255',
            'body' => 'required|min:255',
        ]);
        if ($validator->fails()) {
            return "data save failed";
        };

        $title = $request->title;
        $body = $request->body;
        $post = new Post();
        try {
            $post->createPost($title, $body);
            return response()->json(["data" => $post, "Messages" => "Success to create this post"], 200);
        } catch (Exception $error) {
            return response()->json(["data" => $post, "Messages" => "Fail to create this post"], 500);
        };
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $id = $post->id;
        $title = $request->title;
        $body = $request->body;
        try {
            $post ->updatePost($id,$title,$body);
            return response()->json(["data" => $post, "Messages" => "Post has been updated successfully"], 200);
        } catch (Exception $error) {
            return response()->json(["data" => $post, "Messages" => "Fail to update this post", "error" => $error], 500);
        };
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $id = $post->id;
        try {
            $post->deletePost($id);
            return response()->json(["data" => $post, "Messages" => "Post has been deleted successfully"], 200);
        } catch (Exception $error) {
            return response()->json(["data" => $post, "Messages" => "Fail to delete this post", "error" => $error], 500);
        };
    }
}
