<?php
    require_once './model/furniture.php';
    require_once './model/dvdDisc.php';
    require_once './model/book.php';

    class ProductFactory {
        public static function create ($type, $data) {
            $product = null;
            switch ($type) {
                case 'book':
                    $product = new Book();
                    $product->sku = $data['sku'];
                    $product->name = $data['name'];
                    $product->price = $data['price'];
                    $product->type = $type;
                    $product->weight = $data['weight'];
                    break;
                case 'dvd-disc':
                    $product = new DvdDisc();
                    $product->sku = $data['sku'];
                    $product->name = $data['name'];
                    $product->price = $data['price'];
                    $product->type = $type;
                    $product->size = $data['size'];
                    break;
                case 'furniture':
                    $product = new Furniture();
                    $product->sku = $data['sku'];
                    $product->name = $data['name'];
                    $product->price = $data['price'];
                    $product->type = $type;
                    $product->width = $data['width'];
                    $product->height = $data['height'];
                    $product->length = $data['length'];
                    break;
                default:
                    echo 'Product type not found';
            }
            return $product;
        }

    }