<?php
    
    require_once './dao/productDAO.php';
    require_once './database.php';

    $db = new Database;
    $dao = new ProductDAO($db -> con);

    $dao->findAll();

