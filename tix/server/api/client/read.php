<?php
     header("Access-Control-Allow-Origin:*");
     header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../../config/database.php';
    include_once '../../class/client.php';
    $database = new Database();
    $db = $database->getConnection();
    $items = new Client($db);
    $items->id_client = isset($_GET['id_client']) ? $_GET['id_client']: die();
    $stmt = $items->read();
    $itemCount = $stmt->rowCount();
    echo json_encode($itemCount);
    if($itemCount > 0){
        
        $clientArr = array();
        $clientArr["body"] = array();
        $clientArr["itemCount"] = $itemCount;
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id_client" => $id_client,
                "nom" => $nom,
                "email" => $email,
                "password" => $password,
                "cin" => $cin,
                "img" => $img
            );
            array_push($clientArr["body"], $e);
        }
        echo json_encode($clientArr);
    }
    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }
?>