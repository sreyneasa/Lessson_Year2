<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;



class PostController extends Controller

{

   /**
 * @OA\Get(
 *     path="/api/posts",
 *     summary="Get a post resource",
 * @OA\Response(
 *      response=200,
 *      description="The resource was successfully retrieved"
 * )
 * )
 */

  
    public function index()
    {
        $post = Post::all();
        return response($post);
    }


    /**
         * @OA\Post(
         *     path="/api/post/create",
         *     summary="Authenticate user and generate JWT token",
         *     @OA\Parameter(
         *         name="title",
         *         in="query",
         *         description="Username",
         *         required=true,
         *         @OA\Schema(type="string")
         *     ),
         *     @OA\Parameter(
         *         name="description",
         *         in="query",
         *         description="Description",
         *         required=true,
         *         @OA\Schema(type="string")
         *     ),
         *     @OA\Response(response="200", description="Login successful"),
         *     @OA\Response(response="401", description="Invalid credentials")
         * )
         */


    public function store(Request $request)
    {
        // $post = [
        //     'title' => $request->input('title'),
        //     'description' => $request->input('description')
        // ];
        $posts = new Post();
        $posts->title = $request->input('title');
        $posts->description = $request->input('description');
        $posts->save();
        return response($posts);
    }


   
    /**
         * @OA\Delete(
         *     path="/api/post/delete",
         *     summary="Authenticate user and generate JWT token",
         *     @OA\Parameter(
         *         name="id",
         *         in="query",
         *         description="id",
         *         required=true,
         *         @OA\Schema(type="string")
         *     ),
         *     @OA\Response(response="200", description="Login successful"),
         *     @OA\Response(response="401", description="Invalid credentials")
         * )
         */
    

    public function destroy(Request $request)
    {
        $posts = Post::find($request->input('id'))->delete();
        return response('delete successfully');
    }


    /**
         * @OA\Put(
         *     path="/api/post/update",
         *     summary="Authenticate user and generate JWT token",
         *     @OA\Parameter(
         *         name="id",
         *         in="query",
         *         description="id",
         *         required=true,
         *         @OA\Schema(type="string")
         *     ),
         *     @OA\Parameter(
         *         name="title",
         *         in="query",
         *         description="Username",
         *         required=true,
         *         @OA\Schema(type="string")
         *     ),
         *     @OA\Parameter(
         *         name="description",
         *         in="query",
         *         description="Description",
         *         required=true,
         *         @OA\Schema(type="string")
         *     ),
         *     @OA\Response(response="200", description="Login successful"),
         *     @OA\Response(response="401", description="Invalid credentials")
         * )
         */

    public function update(Request $request){
        $posts = Post::find($request->input('id'));
        $posts->title = $request->input('title');
        $posts->description = $request->input('description');
        $posts->save();
        return response($posts);
    }
}
