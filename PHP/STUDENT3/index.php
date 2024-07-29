<?php 
// include of header
include_once('includes/header.php');

// include navbar
include_once('includes/navbar.php');
//  include of pages 
$page = 'home';

if (isset($_GET['page'])) {
    $page = $_GET['page'];

    // Check if the page file exists
    if (file_exists('./pages/' . $page . '.php')) {
        include_once ('./pages/' . $page . '.php');
    } else {
        include_once ('./pages/404.php');
    }
} else {
    include_once ('./pages/404.php');
}

//  include of footer
include_once('includes/footer.php');



