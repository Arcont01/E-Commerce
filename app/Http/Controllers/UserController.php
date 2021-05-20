<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function me(Request $request){
        $user = $request->user();
        return response([
           'status' => 'success',
           'message' => 'ok',
           'data' => [
               'me' => new UserResource($user)
           ]
        ]);
    }

    public function index(Request $request){
        $user = $request->user();

        $users = User::all()->where('id', '!=', $user->id);

        return response([
           'status' => 'success',
           'message' => 'ok',
           'data' => [
               'users' => UserResource::collection($users)
           ]
        ]);
    }

    public function show(User $user){
        try {

            return response([
                'status' => 'success',
                'message' => "ok",
                'data' => [
                    'user' => new UserResource($user)
                ]
            ]);

        } catch (\Throwable $th) {
            Log::error($th);
            return response([
                'status' => 'error',
                'message' => "Server error"
            ], 500);
        }
    }

    public function update(Request $request, User $user){

        $validation = Validator::make($request -> all(), [
            'name' => ['required', 'max:191', 'string', Rule::unique('users')->ignore($user->id)],
            'email' => ['required', 'email', 'max:191', Rule::unique('users')->ignore($user->id)],
            'password' => ['nullable', 'confirmed', 'min:8'],
        ]);

        if($validation->fails()){
            return response()->json([
                'status' => 'error',
                'message' => $validation -> errors() -> first(),
                'data' => $validation -> errors(),
            ], 400);
        }

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        if(!empty($request->password)){
            $user->password = Hash::make($request->password);
            $user->save();
        }


        return response([
           'status' => 'success',
           'message' => "The user {$user->name} has been updated",
           'data' => []
        ]);
    }

    public function delete(User $user){
        try {

            $name = $user->name;
            $user->delete();

            return response([
                'status' => 'success',
                'message' => "The user $name has been deleted",
                'data' => []
            ]);

        } catch (\Throwable $th) {
            Log::error($th);
            return response([
                'status' => 'error',
                'message' => "Server error"
            ], 500);
        }
    }
}
