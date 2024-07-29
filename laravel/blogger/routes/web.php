<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::fallback(function () {
//     return 'Page Not Found 404!';
// });

// Route::prefix('product')->group(function() {
//     Route::get('/', function (){
//         return 'All Products';
//     });
//     Route::get('/create', function (){
//         return 'Post Product';
//     });
    
// });

// Route::get('/request/{param}', function($param) {
//     return $param;
// })->where('param','expression');

// Route::get('/task/{title}', function($task){
//     return 'Task title: ' . $task;
// })->where('title','[A-Za-z]+');

// Route::get('/task/{id}', function($id){
//     return 'Task id: ' . $id;
// })->where('id','[0-9]+');

// _________________________________________



// =================1===============

// Route::get('/',function (){
//     global $users;
//     return $users;
// });

// Route::get('/users/{name}', function ($name) {
//     return "The users are: " . $name;
// });


Route::get('/myview/{user}', function ($user){
    return view('myview', ['username' => $user]);
});