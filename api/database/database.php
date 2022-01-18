<?php
    

    $dbHost = "localhost";
    $dbUser = "root";
    $dbPass = "";
    $dbName = "scandiweb_task";
    

    //connection to database
    $conn = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);
    if($conn) {
        echo "connection successful";
    } else {
        die("Database connection Failed!");
    };

