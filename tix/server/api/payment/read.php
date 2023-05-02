<?php
 header("Access-Control-Allow-Origin:*");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once '../../config/database.php';
$database = new Database();
$pdo = $database->getConnection();
$client_id=$_POST['client_id'];


$stmt = $this->pdo->prepare('SELECT * FROM payment WHERE client_id=:client_id');
$stmt->execute(['client_id' => $client_id]);
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    extract($row);
    $e = array(
        "id_payment" => $id_payment,
        "ticket_id" => $ticket_id,
        "client_id" => $client_id,
        "name" => $name,
        "mm" => $mm,
        "yy" => $yy,
        "ccv" => $ccv,
        "card_number" => $card_number
    );
    array_push($paymetArr, $e);
}
echo json_encode($paymetArr);
?>
