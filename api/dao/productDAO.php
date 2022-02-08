<?php
    class ProductDAO{
        
        private $con;

        function __construct($con) {
            $this->con = $con;
        }

        function deleteAllById($ids){
          foreach ($ids as $id) {
                $this->deleteById($id);
          }
        }


        function deleteById($id){
            $sql = "DELETE FROM product WHERE sku = '$id'";
            
            mysqli_query($this->con, $sql);
        }

        function findAll(){
            $sql = mysqli_query($this->con, "SELECT p.sku, p.name, p.price, p.type, b.weight, d.size, f.width, f.height, f.length FROM product p 
                                            LEFT JOIN book b ON p.sku = b.sku AND p.type = 'book'
                                            LEFT JOIN dvd_disc d ON p.sku = d.sku AND p.type = 'dvd-disc'
                                            LEFT JOIN furniture f ON p.sku = f.sku AND p.type = 'furniture'");
            
            $data = array();

            while ($row = mysqli_fetch_assoc($sql)){
                $data[] = $row;

                $data += $data;
            }

            echo json_encode($data);
           
        }
    }