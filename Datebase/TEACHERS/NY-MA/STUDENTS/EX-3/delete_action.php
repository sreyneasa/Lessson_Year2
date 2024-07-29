
<?php
// TODO:

require_once "database.php";
$statament = $db->prepare("DELETE*FROM posts WHERE id =:id");

$statament->execute([
    ":id" => $id,
    
]);

header('Location:index.php');