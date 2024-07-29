<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentPostLikeResource;
use App\Http\Resources\CountPostCommentResource;
use App\Http\Resources\PostCommentLikeResource;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return response()->json(["success"=>true, "data"=>$users], 200);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"=>["required"],
            "email"=>["required", "unique:users"],
            "password"=>["required"],
        ]);
        if($validator->fails()){
            return response()->json(["success"=>false,"message"=>$validator->errors()], 401);
        }
        $user = User::create($validator->validated());
        return response()->json(["success"=>true,"data"=>$user, "message"=>"User is created successfully"], 200);
    }

    // Get user's posts, comments ===============
    public function getUserPostsComments(){
        $users = User::all();
        $users = UserResource::collection($users);          
        return response()->json(["success"=>true, "data"=>$users], 200);
    }
    
    
    // Get user's posts, comments, likes ===============
    public function getUserPostsCommentsLikes(){
        $users = User::all();
        $users = PostCommentLikeResource::collection($users);
        return response()->json(["success"=>true, "data"=>$users], 200);
    }

    // Get user's posts, comments, likes from user's id ===============
    public function getPostsCommentsLikesFromUser(string $id){
        $user = User::find($id);
        $user = new PostCommentLikeResource($user);
        return response()->json(["success"=>true, "data"=>$user], 200);
    }

    // Get count posts, comments for each user ===============
    public function countPostsComments(){
        $users = User::all();
        $users = CountPostCommentResource::collection($users);
        return response()->json(["success"=>true, "data"=>$users], 200);
    }
}
