<?php
// TODO:
require_once '../models/student.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $province = $_POST['province'];
    $id = $_POST['student_id']; // Corrected variable name

    updateStudent($id, $name, $age, $province);

    header('Location:../index.php');
}