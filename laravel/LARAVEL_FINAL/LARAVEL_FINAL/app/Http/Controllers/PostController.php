<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        return response()->json(["success"=>true, "data"=>$posts], 200);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "title"=>["required"],
            "description"=>["required"],
            "user_id"=>["required"],
        ]);
        if($validator->fails()){
            return response()->json(["success"=>false,"message"=>$validator->errors()], 401);
        }
        $post = Post::create($validator->validated());
        return response()->json(["success"=>true, "data"=>$post, "message"=>"Post is created successfully"], 200);
    }
}
