<?php

require_once './database.php';
require_once './dao/bookDAO.php';
require_once './dao/dvd_discDAO.php';
require_once './dao/furnitureDAO.php';
require_once './model/furniture.php';
require_once './model/dvdDisc.php';
require_once './model/book.php';


if(isset($_POST['type']) && !empty($_POST['type'])){
    
    switch ($_POST['type']) {
        case 'book':
            $book = new Book();
            $book->sku = $_POST['sku'];
            $book->name = $_POST['name'];
            $book->price = $_POST['price'];
            $book->type = $_POST['type'];
            $book->weight = $_POST['weight'];
            $dao = new BookDAO($con);
            $dao->save($book);
            header("location: /");
            break;
        case 'dvd-disc':
            $dvdDisc = new DvdDisc();
            $dvdDisc->sku = $_POST['sku'];
            $dvdDisc->name = $_POST['name'];
            $dvdDisc->price = $_POST['price'];
            $dvdDisc->type = $_POST['type'];
            $dvdDisc->size = $_POST['size'];
            $dao = new DvdDiscDAO($con);
            $dao->save($dvdDisc);
            header("location: /");
            break;
        case 'furniture':
            $furniture = new Furniture();
            $furniture->sku = $_POST['sku'];
            $furniture->name = $_POST['name'];
            $furniture->price = $_POST['price'];
            $furniture->type = $_POST['type'];
            $furniture->width = $_POST['width'];
            $furniture->height = $_POST['height'];
            $furniture->length = $_POST['length'];
            $dao = new FurnitureDAO($con);
            $dao->save($furniture);
            header("location: /");
            break;
        default:
            echo 'Product type not found';
    }

}   

    
    
