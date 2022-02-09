<?php
    $dbHost = "localhost";
    $dbUser = "id18420470_master";
    $dbPass = "l=R8MQBj4KGLe=qz";
    $dbName = "id18420470_scandiweb_database";
    

    //connection to database
    $con = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);
    if($con) {
    } else {
        die("Database connection Failed!");
    };

