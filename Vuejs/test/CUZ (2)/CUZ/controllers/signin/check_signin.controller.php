<?php
aession_start();
require '../../database/database.php';
require '../../models/user.model.php';
if($_SERVER['REQUEST_METHOD']=='POST'){
    $email=htmlspecialchars($_POST['email']);
    $password=htmlspecialchars($_POST['password']);
    $user=accountExist($email);
    if(count($user)>0){
        if(password_verify($password,$user['password'])){
            echo "Yes";
        }else{
            echo "No";
        }
    }else{
        echo "worng email";
    }

}


?>