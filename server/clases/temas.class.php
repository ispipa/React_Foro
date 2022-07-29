<?php
require_once "conexion/conexion.php";

class temas extends conexion
{
    private $table = "temas";
    private $temasId = "";
    private $temas_name ="";
   
    //obtenemos la lista de temas
    public function listTemas()
    {
        $query = "SELECT * FROM temas";
        $datos = parent::obtenerDatos($query);
        return $datos;
    }
    //obtenemos un  tema en concreto
    public function listTemasId($id)
    {
        $query = "SELECT temas FROM temas  where id = $id";
        $datos = parent::obtenerDatos($query);
        return $datos;
    }

}
?>