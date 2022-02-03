<?php
    $dbHost = "localhost";
    $dbUser = "root";
    $dbPass = "";
    $dbName = "scandiweb_task";
    

    //connection to database
    $con = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);
    if($con) {

    } else {
        die("Database connection Failed!");
    };

