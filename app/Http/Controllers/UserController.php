<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function me(Request $request){
        $user = $request->user();
        return response([
           'status' => 'success',
           'message' => 'ok',
           'data' => [
               'user' => new UserResource($user)
           ]
        ]);
    }
}
