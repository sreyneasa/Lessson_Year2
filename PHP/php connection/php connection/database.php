<?php 
$host = "localhost"; //server name 
$database = "php_connect"; //database name
$username = "root"; //username
$password = ""; //password

$db = new PDO("mysql:host=$host;dbname=$database", $username, $password);