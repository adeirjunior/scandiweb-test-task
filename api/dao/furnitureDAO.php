<?php
    require_once dirname(__FILE__) . '/dao.php';

    class FurnitureDAO  implements DAO {

        private $con;

        function __construct($con) {
            $this->con = $con;
        }

        function save($furniture){
            
            $sql = "INSERT INTO product (
                sku,
                name,
                price,
                type
            ) 
            VALUES(
                '$furniture->sku',
                '$furniture->name',
                '$furniture->price',
                '$furniture->type'
            )";

            mysqli_query($this->con, $sql);

            $sql = "INSERT INTO furniture (
                sku,
                width,
                height,
                length
            ) 
            VALUES(
                '$furniture->sku',
                '$furniture->width',
                '$furniture->height',
                '$furniture->length'
            )";

            mysqli_query($this->con, $sql);
        }      
    }