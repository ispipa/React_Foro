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

    if($_SERVER["REQUEST_METHOD"] == "GET")
    {
        if(isset($_GET["page"]))
        {
            $pagina = $_GET["page"];
            $listaUsuarios =  $_usuarios->listUsuarios($pagina);
            echo json_encode($listaUsuarios);
        }
        else if(isset($_GET["id"]))
        {
            $user_id = $_GET["id"];
            $user_data = $_usuarios->obtenerUsuario($user_id);
            echo json_encode($user_data);
        }
    }
    else if ($_SERVER["REQUEST_METHOD"] == "POST") 
    {
        $postBody = file_get_contents("php://input");
        $resp = $_usuarios->post($postBody);
        print_r($resp);
    }
    else if ($_SERVER["REQUEST_METHOD"] == "PUT") 
    {
        $postBody = file_get_contents("php://input");
        $resp = $_usuarios->put($postBody);
        print_r($resp);
    }
    else if ($_SERVER["REQUEST_METHOD"] == "DELETE") 
    {
        echo "estoy en delete";
    }
?>