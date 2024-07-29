<?php
// TODO:
require_once('../models/student.php');
var_dump(getstudents());
if (isset($_GET['id'])){
    $id = $_GET['id'];
    echo "hello";
}
deleteStudent($id);
// print_r($isDelete);
header("Location: ../index.php");
?>