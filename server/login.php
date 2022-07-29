<?php 
require_once 'clases/usuarios.class.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$_usuarios = new usuarios;

if($_SERVER["REQUEST_METHOD"] == "POST")
{

    $postBody = file_get_contents("php://input");
    $resp = $_usuarios->login($postBody);
    echo json_encode($resp);
}
?>