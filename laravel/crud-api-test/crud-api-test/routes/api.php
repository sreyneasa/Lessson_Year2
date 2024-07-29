<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\CommentsController;


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


// -----user Route-----------------------------------------------------------
Route::post('/user', [UserController::class, "create"]);
Route::get('/user', [UserController::class, "index"]);
Route::put('/update', [UserController::class, "update"]);
Route::delete('/delete', [UserController::class, "delete"]);

//-----post Route------------------------------------------------------
Route::get('/post', [PostsController::class, "index"]);
Route::post('/post', [PostsController::class, "create"]);
Route::delete('/delete', [PostsController::class, "delete"]);
Route::put('/update', [PostsController::class, "update"]);

//--------Like Route------------------------------------------------
Route::get('/likes', [LikesController::class, "index"]);
Route::post('/likes', [LikesController::class, "create"]);
Route::put('/update', [LikesController::class, "update"]);
Route::delete('/delete', [LikesController::class, "delete"]);

//--------Comment Route------------------------------------------------
Route::get('/comment', [CommentsController::class, "index"]);
Route::post('/comment', [CommentsController::class, "create"]);
Route::put('/update', [CommentsController::class, "update"]);
Route::delete('/delete', [CommentsController::class, "delete"]);
