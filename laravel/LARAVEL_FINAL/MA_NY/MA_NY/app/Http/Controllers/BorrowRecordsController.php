<?php

namespace App\Http\Controllers;

use App\Models\BorrowRecords;
use Illuminate\Http\Request;

class BorrowRecordsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return BorrowRecords::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request)
    {
        $create = BorrowRecords::create($request->all());
        return $create;
    }

    /**
     * Display the specified resource.
     */
    public function show(BorrowRecords $borrowRecords)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $update = BorrowRecords::find($request->id);
        $update->update($request->all());
        return response($update);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request)
    {
        $delete = BorrowRecords::find($request->id);
        $delete->delete();
        return response($delete);
    }
}
