<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login', [\App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('me', [\App\Http\Controllers\UserController::class, 'me'])->name('logout');
    Route::post('logout', [\App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');
    Route::post('register', [\App\Http\Controllers\Auth\RegisterController::class, 'register'])->name('register');
    Route::prefix('user')->group(function(){
        Route::get('/', [\App\Http\Controllers\UserController::class, 'index'])->name('user.index');
        Route::get('/{user}', [\App\Http\Controllers\UserController::class, 'show'])->name('user.show');
        Route::put('/{user}', [\App\Http\Controllers\UserController::class, 'update'])->name('user.update');
        Route::delete('/{user}', [\App\Http\Controllers\UserController::class, 'delete'])->name('user.delete');
    });
});

Route::prefix('product')->group(function (){
    Route::get('/paginate', [\App\Http\Controllers\ProductController::class, 'indexPaginate'])->name('product.index.paginate');
    Route::get('/{slug}', [\App\Http\Controllers\ProductController::class, 'show'])->name('product.show');

    Route::middleware('auth:sanctum')->group(function (){
        Route::get('/', [\App\Http\Controllers\ProductController::class, 'index'])->name('product.index');
        Route::post('/', [\App\Http\Controllers\ProductController::class, 'store'])->name('product.store');
        Route::put('/{slug}', [\App\Http\Controllers\ProductController::class, 'update'])->name('product.update');
        Route::delete('/{slug}', [\App\Http\Controllers\ProductController::class, 'delete'])->name('product.delete');
    });
});
