<?php
// Get current date
date_default_timezone_set('Asia/Phnom_Penh');

require_once "database.php";

    $statament = $db->prepare("INSERT INTO posts (name,description) VALUES (:name,:description)");

    $statament->execute([
        ":title" => $title,
        ":description" => $description,
        ":date('Y-m-d')" => $post_date
    ]);
    

header("Location:index.php");
