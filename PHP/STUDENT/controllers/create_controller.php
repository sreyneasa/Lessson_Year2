<?php
// TODO:
require_once('../models/student.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name =$_POST['name'];
    $age =$_POST['age'];
    $province =$_POST['province'];
    
    $statement = $connection->prepare("INSERT INTO students(name,age,province) VALUES (:name,:age,:province)");

    $statement->execute([
        ":name" => $name,
        ":age" => $age,
        ":province" => $province
    ]);
    header("Location: ../index.php");
}