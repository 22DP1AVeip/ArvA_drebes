<?php

use Illuminate\Support\Facades\Route;  // Ensure this is only imported once
use Inertia\Inertia;

// Commented-out example routes
// Route::get('/', function () {
//     return Inertia::render('Welcome');
// })->name('home');

// Route::get('dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Your active routes
Route::get('', function () {
    return Inertia::render('HomeView'); // Points to 'HomeView.vue' in resources/js/pages/
})->name('home.view');

Route::get('/MenWear', function () {
    return Inertia::render('MenView'); // Points to 'MenView.vue' in resources/js/pages/
})->name('MenView.view');

Route::get('/WomenWear', function () {
    return Inertia::render('WomanView'); // Points to 'WomanView.vue' in resources/js/pages/
})->name('Women.view');

// Include other routes like auth and settings
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
