<?php

namespace App\Http\Controllers;

use App\Models\Likes;
use Illuminate\Http\Request;

class LikesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Likes::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $Likes = Likes::create($request->all());
        return response($Likes);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Likes $Likes)
    {
        $update = Likes::find($request->id);
        $update->update($request->all());
        return response($update);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request)
    {
        $delete = likes::find($request->id);
        $delete->delete();
        return response($delete);
    }
}
