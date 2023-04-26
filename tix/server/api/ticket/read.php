<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../../config/database.php';
    include_once '../../class/ticket.php';
    $database = new Database();
    $db = $database->getConnection();
    $items = new Ticket($db);
    $stmt = $items->readAll();
    $itemCount = $stmt->rowCount();
    //echo json_encode($itemCount);
    if($itemCount > 0){
        
        $ticketArr = array();
        $ticketArr["ticket"] = array();
        $ticketArr["itemCount"] = $itemCount;
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id_ticket" => $id_ticket,
                "home_id" => $home_id,
                "away_id" => $away_id,
                "home_name" => $home_name,
                "away_name" => $away_name,
                "date" => $date,
                "time" => $time
            );
            array_push($ticketArr["ticket"], $e);
        }
        echo json_encode($ticketArr);
    }
    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }
?>