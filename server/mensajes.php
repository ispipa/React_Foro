<?php 
require_once 'clases/mensajes_hilos.class.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$_mensajes = new mensajes_hilos;

if($_SERVER["REQUEST_METHOD"] == "GET")
{
    if(isset($_GET["id"]))
    {
        $mesajes_hilos = $_GET["id"];
        $listaMensajes =  $_mensajes->obtenerMensajes($mesajes_hilos);
        echo json_encode($listaMensajes);
    }
    else if(isset($_GET["id-mensaje"]))
    {
        $mesaje_hilo = $_GET["id-mensaje"];
        $listaMensajes =  $_mensajes->obtenerMensaje($mesaje_hilo);
        echo json_encode($listaMensajes);
    }
}
else if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $postBody = file_get_contents("php://input");
    $resp = $_mensajes->post($postBody);
    echo json_encode($resp);
}

?>