<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
error_log(json_encode($_POST));
try {
    $database = new Database();
    $pdo = $database->getConnection();
    $ticket_id =(int) $_POST['ticket_id'];
    $client_id =(int) $_POST['client_id'];
    $name = $_POST['name'];
    $mm = (int) $_POST['mm'];
    $yy = (int) $_POST['yy'];
    $ccv =(int)  $_POST['ccv'];
    $card_number = $_POST['card_number'];
    $stmt = $pdo->prepare('INSERT INTO payment (ticket_id, client_id, name, mm, yy, ccv, card_number) VALUES (:ticket_id, :client_id, :name, :mm, :yy, :ccv, :card_number)');
    error_log($stmt->execute(['ticket_id' => $ticket_id, 'client_id' => $client_id, 'name' => $name, 'mm' => $mm, 'yy' => $yy, 'ccv' => $ccv, 'card_number' => $card_number]));

    $stmt->execute(['ticket_id' => $ticket_id, 'client_id' => $client_id, 'name' => $name, 'mm' => $mm, 'yy' => $yy, 'ccv' => $ccv, 'card_number' => $card_number]);
    $id_payment = $pdo->lastInsertId();
    echo json_encode(array('message' => 'payment created'));
} catch (Exception  $e) {
    echo json_encode(array('message' => 'payment not created'));
    error_log(json_encode(array('message' => 'payment not created')));
    error_log(json_encode($e));
}
?>
