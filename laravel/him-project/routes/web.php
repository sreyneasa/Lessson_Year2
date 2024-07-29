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
// 
Route::get('/', function () {
    return view('welcome');
});

// // -----------1---------------
// Route::get('/', function () {
//     global $users;
//     return $users;
// });

// Route::get('/users', function(){
//     global $users;
//     $students = "";
//     foreach($users as $user) { 
//         $students = $students.$user['name'].", ";
//     }
//     return "The users are: ".$students;
// });

// // -------------2----------------

// Route::get('/users', function(){
//     global $users;
//     return $users;
// });

// // ------------------3---------------

// Route::get('/users/{userIndex}', function($userIndex) {
//     global $users;
//     if ($userIndex < count($users)) {
//         return $users[$userIndex];
//     } else {
//         return "Cannot find user with index: " . $userIndex;
//     }
// });

// // -----------------4--------------/

// Route::get('/users/{userName}', function($userName) {
//     global $users;
//     foreach($users as $user) {
//         if ($user['name'] == $userName) {
//             return $user;
//         }
//     }
//     return "Cannot find user with userName: ". $userName;
// });

// // ------------5---------

// Route::prefix('student')->group(function (){
//     Route::get('/user', function () {
//         global $users;
//         return $users;
//     });
//     Route ::get('/user/{userIndex}', function ($userIndex){
//         global $users;
//         return $users[$userIndex];
//     });

//     Route:: get('/user/{userName}', function ($userName){
//         global $users;
//         foreach($users as $user){
//             if($user['name'] == $userName){
//                 return $user;
//             }
//         }
//         return "Cannot find the user with name " . $userName;
//     });
//     Route::get('/user/{userIndex}/post/{postIndex}',function($userIndex,$postIndex){
//         global $users;
//         return $users[$userIndex]['posts'][$postIndex];

//     });
//     Route:: fallback(function(){
//         return "Cannot find this like";
//     });
// });

// // ----------------------6----------------
// // ex6
// Route::prefix('/user')->group(function(){
//     Route::get("/{id}/post/{post_id}", function(){
//         global $users;
//         $id = Route::current()->parameter('id');
//         $post_id = Route::current()->parameter('post_id');
//         if ($id < count($users)){
//             if ($post_id < count($users[$id]['posts'])){
//                 return $users[$id]['posts'][$post_id];
//             }
//         }else{
//             return "Cannot find the user with index " . $id;
//         };
//     });
// });


Route::get('/myview/{user}', function ($user){
    return view('home', ['username' => $user]);
});