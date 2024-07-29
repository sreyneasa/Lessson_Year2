<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
     * @OA\Post(
     *     path="/api/home",
     *     summary="Authenticate user and generate JWT token",
     *     @OA\Parameter(
     *         name="name",
     *         in="query",
     *         description="User's name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response="200", description="Login successful"),
     *     @OA\Response(response="401", description="Invalid credentials")
     * )
     */

class HomeController extends Controller
{
    public function index(Request $request){
        return response()->json([
            'name' => $request->input('name'),
            'message' => 'helloworld'
        ]);
    }
}
