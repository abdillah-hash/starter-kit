<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('my-course', function () {
        return Inertia::render('my-course');
    })->name('myCourse');

    Route::get('my-course-view', function () {
        return Inertia::render('my-course-view');
    })->name('myCourseView');

    Route::get('annoucement', function () {
        return Inertia::render('annoucement');
    })->name('annoucement');
    
    Route::get('attendance', function () {
        return Inertia::render('attendance');
    })->name('attendance');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
