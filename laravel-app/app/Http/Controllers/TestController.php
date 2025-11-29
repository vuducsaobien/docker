<?php

namespace App\Http\Controllers;

use App\Models\User;

class TestController extends Controller
{
    public function index()
    {
        $model = new User();
        $user = $model->all();
        return $user;
    }
}
