<?php
require_once('templates/header.php');

echo "<ul>";
// TODO
// // - Your name is XXXXX
// echo "<li>Your name is $name</li>";
// // - Your hobbies areXXXXX
// echo "<li>Your hobbies are $hobbies </li>";
// // - You are a boy/girl
// echo "<li>You are a $gender</li>";


echo "<li> your name is " .$_GET['name'] ."<br>" ."</li>";
echo "your hobbies is " .$_GET['hobby'] ."<br>";
$gender = isset($_GET['gender'])=="male"?"boy":"girl";
echo "your are a " . $gender;

echo "</ul>";


require_once('templates/footer.php');