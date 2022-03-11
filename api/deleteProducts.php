<?php  
    
    require_once './dao/productDAO.php';
    require_once './database.php';

    $db = new Database;
    $dao = new ProductDAO($db -> con);

    if(isset($_POST['delete-checkbox'])){
        $dao->deleteAllById($_POST['delete-checkbox']);
    }
    header("location: http://localhost:3000/");

