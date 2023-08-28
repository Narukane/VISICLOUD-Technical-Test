<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PecahanController;

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

Route::get('/', [PecahanController::class, 'showForm'])->name('pecahan.form');
Route::post('/process', [PecahanController::class, 'processForm'])->name('pecahan.process');
Route::post('/result', [PecahanController::class, 'resultForm'])->name('pecahan.result');
