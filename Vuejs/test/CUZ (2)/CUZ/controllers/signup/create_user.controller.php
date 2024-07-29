<?php
require '../../database/database.php';
require '../../models/user.model.php';
if($_SERVER['REQUEST_METHOD']=='POST'){
    $name=htmlspecialchars($_POST['name']);
    $email=htmlspecialchars($_POST['email']);
    $password=htmlspecialchars($_POST['password']);
    //echo name .''.$email.''.$password
    $pwd=password_hash($password,PASSWORD_BCRYPT);
    // echo password_hash('123',);
    // $isCreate=createAccount($name,$email,$pwd);
    // if($isCreate){
    //     header('Location:/signin');

    // }else{
    //     header('Location:/');
    // }
    $user =accountExist($email);
    // var_dump($user);
    if(count($user)==0){
        createAccount($name,$email,$pwd);
        header('Location:/signin');
    }else{
        echo 'Account already exsists';
    }
}