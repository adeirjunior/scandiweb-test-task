<?php  
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    require_once './dao/productDAO.php';
    require_once './database.php';

    
    $dao = new ProductDAO($con);
    if(isset($_POST['delete-checkbox'])){
        $dao->deleteAllById($_POST['delete-checkbox']);
    }
    header("location: http://localhost:3000");

