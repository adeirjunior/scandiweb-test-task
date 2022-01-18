<?php
    require_once '../database/database.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $query = "insert into userfeedback (sku, name, price, type) values(
        '" . $_POST['sku'] . "',
        '" . $_POST['name'] . "',
        '" . $_POST['price'] . "',
        '" . $_POST['type'] . "'
        )";

    
        
    if(isset($_POST['name'])){
        $result = @mysqli_query($conn, $query);
        if ($result) {
            echo json_encode(["sent" => 1, ]);
        } else {
            echo json_encode(["sent" => 0, ]);
        }
    } else{

    }
       
  
