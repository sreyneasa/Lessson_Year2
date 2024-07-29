<?php
require_once "../../database/database.php";
require_once "../../models/user.model.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    $encryptPassword = password_hash($password, PASSWORD_BCRYPT);

    // $isCreated = createAccount($name, $email,$encryptPassword );
    // if($isCreated){
    //     header('Location: /signin');
    // }else{
    //     header('Location: /');
    // }

    $user = accountExist($email);
    // var_dump($user);
    if (count($user) == 0) {
        accountExist($name, $email, $encryptPassword);
        header("Location: /signin");
    }else{
        echo "Account already exists";
    }
}