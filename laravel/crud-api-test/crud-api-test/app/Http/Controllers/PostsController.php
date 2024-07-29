<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;
class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PostResource::collection(Posts::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $Posts = Posts::create($request->all());
        return response($Posts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function delete(Request $request)
    {
        $delete = Posts::find($request->id);
        $delete->delete();
        return response($delete);
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Posts $posts)
    {
        $update = Posts::find($request->id);
        $update->update($request->all());
        return response($update);
    }

}
