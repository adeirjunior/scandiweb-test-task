<?php
    require_once '../database/database.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, INTO, VALUES, INSERT, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $query = "INSERT INTO userfeedback (sku, name, price, type) VALUES (
        '" . $_POST['sku'] . "',
        '" . $_POST['name'] . "',
        '" . $_POST['price'] . "',
        '" . $_POST['type'] . "'
        )";

    
        
    if(isset($_POST['name']) && !empty($_POST['name'])){
        $result = @mysqli_query($conn, $query);
        if ($result) {
            echo json_encode(["send" => 1 ]);
        } else {
            echo json_encode(["send" => 0 ]);
        }
    } else{

    }
       
  
