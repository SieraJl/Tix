<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    include_once '../../config/database.php';
    include_once '../../class/client.php';
    $database = new Database();
    $db = $database->getConnection();
    $items = new Client($db);
    $items->email = isset($_POST['email']) ? $_POST['email']: die();
    $items->password = isset($_POST['password']) ? $_POST['password']: die();
    $stmt = $items->login();
    $itemCount = $stmt->rowCount();
    if($itemCount > 0){
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "login" => true,
                "id_client" => $id_client,
                "nom" => $nom,
                "email" => $email,
                "cin" => $cin,
                "img" => $img
            );
            
        }
        echo json_encode($e);
    }
    else{
        http_response_code(404);
        echo json_encode(
            array(
            "login"=>false,
            "message" => "No record found."
            )
        );
    }
?>