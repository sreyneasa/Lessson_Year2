<?php

namespace App\Http\Controllers;

use App\Models\comments;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return comments::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $create = comments::create($request->all());
        return $create;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request)
    {
        $delete = comments::find($request->id);
        $delete->delete();
        return response($delete);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $update = comments::find($request->id);
        $update->update($request->all());
        return response($update);
    }

}
