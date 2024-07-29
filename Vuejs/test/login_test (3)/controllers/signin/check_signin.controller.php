<?php

require '../../database/database.php';
require '../../models/user.model.php';

if($_SERVER['REQUEST_METHOD']=='POST'){
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    $user = accountExist ($email);
    if (count($user) > 0) {
        if (password_verify($password , $user[3])){
            echo 'yes';
        }else{
            echo 'worng password';
        }
    }else{
        echo 'worng password';
    }
}