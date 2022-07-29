<?php
require_once 'clases/temas.class.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$_temas = new temas;

if($_SERVER["REQUEST_METHOD"] == "GET")
{
    if(isset($_GET["id"]))
    {
        $tema_concreto = $_GET["id"];
        $listaTemas =  $_temas->listTemasId($tema_concreto);
        echo json_encode($listaTemas);
    }
    else if($_GET)
    {
        $listaTemas =  $_temas->listTemas();
        echo json_encode($listaTemas);
    }
}

?>