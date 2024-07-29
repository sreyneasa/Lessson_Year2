<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use Exception;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return response()->json(["data" => $users, "Messages" => "Request has been successful"], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $email_verified_at = $request-> email_verified_at;
        $password = $request->password;
        $user = new User();
        $user->name = $name;
        $user->email = $email;
        $user->email_verified_at = $email_verified_at;
        $user->password = $password;
      
        try{
            $user->save();
            return response()->json(["data" => $user, "Messages" => "User has been created successfully"], 200);
        }catch(Exception $error){
            return response()->json(["data" => $user, "Messages" => "Fail to create this user", "error" => $error], 500);
        }
        

        
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json(["data" => $user, "Messages" => "Request has been successful"], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, User $user)
    {
        $user->update($request->validated());
        return response()->json(["data" => $user, "Messages" => "User has been updated successfully"], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $id = $user ->id;
        try{
            $user->destroy($id);
            return response()->json(["data" => $user, "Messages" => "User has been deleted successfully"], 200);
        }catch(Exception $error){
            return response()->json(["data" => $user, "Messages" => "Fail to delete this user", "error" => $error], 500);
        }
        
        

    }
}
