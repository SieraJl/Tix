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
                "time" => $time,
                "home_logo"=>getClubLogo($home_id),
                "away_logo"=>getClubLogo($away_id)
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
    function getClubLogo($id) {
        switch ($id) {
            case "59628":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608828783_media.png";
            case "35188":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608829554_media.png";
            case "59638":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1609169169_media.png";
            case "39618":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1582386973_team.jpg";
            case "59636":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608827731_media.png";
            case "44463":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608828236_media.png";
            case "378002":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1566659580_team.jpg";
            case "283347":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608881356_media.jpg";
            case "148874":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1444404507_team.png";
            case "59634":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1473430753_team.png";
            case "59618":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608880304_media.png";
            case "112647":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1444404830_team.png";
            case "223600":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1444378318_team.png";
            case "59626":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1635946236_media.jpg";
            case "239028":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1635949528_media.jpg";
            case "402353":
                return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1607213895_media.png";
            default:
                return "https://pbs.twimg.com/profile_images/578844000267816960/6cj6d4oZ_400x400.png";
        }
    }
    
?>