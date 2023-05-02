<?php
 header("Access-Control-Allow-Origin:*");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once '../../config/database.php';
include_once '../../class/client.php';
$database = new Database();
$pdo = $database->getConnection();
$client=new Client($pdo);
$client->nom=$_POST['nom'];
$client->email=$_POST['email'];
$client->password=$_POST['password'];
$client->cin=$_POST['cin'];
$client->img="";
$stmt=$client->create();
if($stmt){
    echo json_encode(array('message'=>'client created'));
    error_log(json_encode(array('message'=>'client created: '.$client->email=$_POST['email'])));
}
else{
    echo json_encode(array('message'=>'client not created'));
    error_log(json_encode(array('message'=>'client not created')));
}

?>