<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../database/database.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->sku)
    && isset($data->name)
    && isset($data->price)
    && isset($data->type)
    && isset($data->size)
    && isset($data->weight)
    && isset($data->width)
    && isset($data->height)
    && isset($data->length)
) {
    if(
        !empty(trim($data->sku))
        && !empty(trim($data->name))
        && !empty(trim($data->price))
        && !empty(trim($data->type))
        && !empty(trim($data->size))
        && !empty(trim($data->weight))
        && !empty(trim($data->width))
        && !empty(trim($data->height))
        && !empty(trim($data->length))
    ) {
        $sku = mysqli_real_escape_string($con, trim($data->sku));
        $name = mysqli_real_escape_string($con, trim($data->name));
        $price = mysqli_real_escape_string($con, trim($data->price));
        $type = mysqli_real_escape_string($con, trim($data->type));
        $size = mysqli_real_escape_string($con, trim($data->size));
        $weight = mysqli_real_escape_string($con, trim($data->weight));
        $width = mysqli_real_escape_string($con, trim($data->width));
        $height = mysqli_real_escape_string($con, trim($data->height));
        $length = mysqli_real_escape_string($con, trim($data->length));
        $sql = "INSERT INTO products (
            sku,
            name,
            price,
            type,
            size,
            weight,
            width,
            height,
            length
        ) 
        VALUES(
            '$sku',
            '$name',
            '$price',
            '$types',
            '$size',
            '$weight',
            '$width',
            '$height',
            '$length'
        )";
        $insertProduct = mysqli_query($con, $sql);
        if ($insertProduct) {
            $last_id = mysqli_insert_id($con);
            echo json_encode(["success" => 1, "msg" => "User Inserted."]);
        } else {
            echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Please Fill required fields!"]);
    }
    
} else {
    echo json_encode(["success" => 0, "msg" => "Error Creating Fields"]);
}