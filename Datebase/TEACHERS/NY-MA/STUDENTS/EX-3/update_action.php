<?php
// Get current date
date_default_timezone_set('Asia/Phnom_Penh');

require_once "database.php";
    $statament = $db->prepare("UPDATE posts SET name=:description, description=:description WHERE id = :id)");

    $statament->execute([
       ':id' =>$id,
    ]);
    header("Location:index.php");

