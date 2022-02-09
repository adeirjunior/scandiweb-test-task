<?php  
    
    require_once './dao/productDAO.php';
    require_once './database.php';

    
    $dao = new ProductDAO($con);
    if(isset($_POST['delete-checkbox'])){
        $dao->deleteAllById($_POST['delete-checkbox']);
    }
    header("location: /");

