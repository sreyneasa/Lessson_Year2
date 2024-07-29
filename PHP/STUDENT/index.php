<?php 
// include of header
    require_once("includes/header.php");
//  include of pages
    $page='home';
    if(isset($_GET["page"])){
        $page=$_GET["page"];
    }
    require_once("pages/".$page.".php");
    

//  include of footer 
    require_once("includes/footer.php");