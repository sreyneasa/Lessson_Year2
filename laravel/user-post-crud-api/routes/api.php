<?php

use App\Http\Controllers\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/post',PostsController::class);


Route::get('/create-user', function (Request $request){
    $user = new \App\Models\User();
    $user->name = 'admin';
    $user->email = 'admin@admin';
    $user->password =  bcrypt('123');
    $user->save();
    return $user;
});

Route::get('login', function (Request $request){
    $user = \App\Models\User::where('email','admin@admin')->first();
    $token = $user->createToken('token')->plainTextToken;
    $response = [
        'user' => $user,
        'token' => $token
    ];
    return response()->json($response,200);
});

Route::middleware('auth:sanctum')->get('logout',function(Request $request){
    $request->user()->currentAccessToken()->delete();
    return response()->json(['message' => 'Successfully logged out']);
});