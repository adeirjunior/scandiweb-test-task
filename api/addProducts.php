<?php
require_once './database.php';
require_once './dao/bookDAO.php';
require_once './dao/dvd_discDAO.php';
require_once './dao/furnitureDAO.php';
require_once './model/furniture.php';
require_once './model/dvdDisc.php';
require_once './model/book.php';
require_once './factory/productFactory.php';
require_once './factory/daoFactory.php';

$db = new Database;

if(isset($_POST['type']) && !empty($_POST['type'])){
    
    $data['sku'] = $_POST['sku'];
    $data['name'] = $_POST['name'];
    $data['price'] = $_POST['price'];
    $data['size'] = isset($_POST['size']) ? $_POST['size'] : null;
    $data['weight'] = isset($_POST['weight']) ? $_POST['weight'] : null;
    $data['width'] = isset($_POST['width']) ? $_POST['width'] : null;
    $data['height'] = isset($_POST['height']) ? $_POST['height'] : null;
    $data['length'] = isset($_POST['length']) ? $_POST['length'] : null;

    $product = ProductFactory::create($_POST['type'], $data);
    $dao = DaoFactory::create($_POST['type'], $db -> con);
    $dao->save($product);
    header('location: http://localhost:3000/');

}   

    
    
