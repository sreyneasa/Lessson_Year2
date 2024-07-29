<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $likes = Like::all();
        return response()->json(["success"=>true, "data"=>$likes], 200);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "like_number"=>["required"],
            "user_id"=>["required"],
            "post_id"=>["required"],
        ]);
        if($validator->fails()){
            return response()->json(["success"=>false,"message"=>$validator->errors()], 401);
        }
        $like = Like::create($validator->validated());
        return response()->json(["success"=>true,"data"=>$like, "message"=>"Post is created successfully"], 200);
    }
}
