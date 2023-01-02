<?php 
require_once 'clases/hilos.class.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$_hilos = new hilos;

if($_SERVER["REQUEST_METHOD"] == "GET")
{
    if(isset($_GET["id"]))
    {
        $hilos_tema = $_GET["id"];
        $listaTemas =  $_hilos->obtenerHilos($hilos_tema);
        echo json_encode($listaTemas);
    }
    else if(isset($_GET["hilo"]))
    {
        $hilo = $_GET["hilo"];
        $listaHilo =  $_hilos->obtenerHilo($hilo);
        echo json_encode($listaHilo);
    }
}
else if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $postBody = file_get_contents("php://input");
    $resp = $_hilos->post($postBody);
    echo json_encode($resp);
}

?>