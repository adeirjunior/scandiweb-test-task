<?php
    
    require_once './dao/productDAO.php';
    require_once './database.php';

    $dao = new ProductDAO($con);

    $dao->findAll();

