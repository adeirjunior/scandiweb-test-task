<?php
    require_once dirname(__FILE__) . '/dao.php';

    class BookDAO implements DAO {

        private $con;

        function __construct($con) {
            $this->con = $con;
        }

        function save($book){
            
            $sql = "INSERT INTO product (
                sku,
                name,
                price,
                type
            ) 
            VALUES(
                '$book->sku',
                '$book->name',
                '$book->price',
                '$book->type'
            )";

            mysqli_query($this->con, $sql);

            $sql = "INSERT INTO book (
                sku,
                weight
            ) 
            VALUES(
                '$book->sku',
                '$book->weight'
            )";

            mysqli_query($this->con, $sql);
        }      
    }