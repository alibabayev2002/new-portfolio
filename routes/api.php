<?php

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

Route::get('/likes',function(){
    $count = DB::table('liked')->count();

    $you_liked = DB::table('liked')
    ->where('ip',request()->ip())
    ->exists();

    return response()->json([
        'count' => $count,
        'you' => $you_liked,
    ]);
});

Route::get('/like',function(){
    $create = DB::table('liked')->insert([
        'ip' => request()->ip(),
        'date' => Carbon::now(),
    ]);
    return $create;
});

Route::get('/took',function(){
    $delete = DB::table('liked')
    ->where('ip',request()->ip())
    ->delete();
    return $delete;
});

