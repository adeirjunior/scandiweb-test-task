<?php
    require_once dirname(__FILE__) . '/dao.php';
    class DvdDiscDAO  implements DAO {

        private $con;

        function __construct($con) {
            $this->con = $con;
        }

        function save($dvd_disc){
            
            $sql = "INSERT INTO product (
                sku,
                name,
                price,
                type
            ) 
            VALUES(
                '$dvd_disc->sku',
                '$dvd_disc->name',
                '$dvd_disc->price',
                '$dvd_disc->type'
            )";

            mysqli_query($this->con, $sql);

            $sql = "INSERT INTO dvd_disc (
                sku,
                size
            ) 
            VALUES(
                '$dvd_disc->sku',
                '$dvd_disc->size'
            )";

            mysqli_query($this->con, $sql);
        }      
    }