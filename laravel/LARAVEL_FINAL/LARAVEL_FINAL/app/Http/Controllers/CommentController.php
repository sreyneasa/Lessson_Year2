<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $comments = Comment::all();
        return response()->json(["success"=>true, "data"=>$comments], 200);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "text"=>["required"],
            "user_id"=>["required"],
            "post_id"=>["required"],
        ]);
        if($validator->fails()){
            return response()->json(["success"=>false,"message"=>$validator->errors()], 401);
        }
        $comment = Comment::create($validator->validated());
        return response()->json(["success"=>true,"data"=>$comment, "message"=>"Comment is created successfully"], 200);
    }
}
