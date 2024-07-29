<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\BorrowRecordsController;;

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


//-----book Route------------------------------------------------------
Route::get('/book', [BooksController::class, "index"]);
Route::post('/book', [BooksController::class, "create"]);
Route::delete('/delete', [BooksController::class, "delete"]);
Route::put('/update', [BooksController::class, "update"]);


//--------borrow book Route------------------------------------------------
Route::get('/borrow_book', [BorrowRecordsController::class, "index"]);
Route::post('/borrow_book', [BorrowRecordsController::class, "create"]);
Route::put('/update', [BorrowRecordsController::class, "update"]);
Route::delete('/delete', [BorrowRecordsController::class, "delete"]);

