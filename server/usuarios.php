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
        if(isset($_POST["modify"])){
            //$postBody = file_get_contents("php://input");
            $postBody = $_POST + $_FILES;
            $resp = $_usuarios->put(json_encode($postBody));
            //print_r($resp);
            echo json_encode($resp,JSON_PRETTY_PRINT, 3);
        }
        else{
            $postBody = file_get_contents("php://input");//capturar datos que se envian en formato JSON por URL
            $resp = $_usuarios->post($postBody);
            print_r($resp);
        }
    }
    else if ($_SERVER["REQUEST_METHOD"] == "DELETE") 
    {
        echo "estoy en delete";
    }
?>