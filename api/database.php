<?php
define('DB_HOST',"localhost");
define('DB_USER',"root");
define('DB_PASS',"");
define('DB_NAME',"scandiweb_task");


class Database {
    public function __construct() {

        $con = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

        if (!$con) {
            die("Database connection Failed!");
        } 
        return $this -> con = $con;
    }
}