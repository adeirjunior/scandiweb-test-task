<?php

require_once dirname(__FILE__) . '/../dao/bookDAO.php';
require_once dirname(__FILE__) . '/../dao/dvd_discDAO.php';
require_once dirname(__FILE__) . '/../dao/furnitureDAO.php';


class DaoFactory
{
    public static function create($type, $con)
    {
        $dao = null;
        switch ($type) {
            case 'book':
                $dao = new BookDAO($con);
                break;
            case 'dvd-disc':
                $dao = new DvdDiscDAO($con);
                break;
            case 'furniture':
                $dao = new FurnitureDAO($con);
                break;
            default:
        }
        return $dao;
    }
}
