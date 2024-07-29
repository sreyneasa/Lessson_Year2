<?php

namespace App\Http\Controllers;

use App\Models\Books;
use Illuminate\Http\Request;
use App\Http\Resources\BookResource;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return BookResource::collection(Books::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request)
    {
        $Books = Books::create($request->all());
        return response($Books);
    }

    /**
     * Display the specified resource.
     */
    public function show(Books $books)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Books $books)
    {
        $update = Books::find($request->id);
        $update->update($request->all());
        return response($update);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request)
    {
        $delete = Books::find($request->id);
        $delete->delete();
        return response($delete);
    }
}
