<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
// use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;



class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return UserResource::collection(User::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $user = User::create($request->all());
        return response($user);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function delete(Request $request)
    {
        $delete = User::find($request->id);
        $delete->delete();
        return response($delete);
    }

    public function update(Request $request)
    {
        $update = User::find($request->id);
        $update->update($request->all());
        return response($update);
    }



}