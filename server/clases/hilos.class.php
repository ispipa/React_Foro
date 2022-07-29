<?php
require_once "conexion/conexion.php";

class hilos extends conexion
{
    private $table = "hilos";
    private $hilosId = "";
    private $titulo_name ="";
    private $descripcion_hilo ="";
    private $estatus_hilo ="";
    private $fecha_creacion_hilo ="";
    private $id_usuario ="";
    private $id_temas ="";

    //obtenemos los hilos de un tema a traves de su id
    public function obtenerHilos($id)
    {
        $query = "SELECT titulo_hilo FROM hilos join temas on hilos.id_usuario = temas.id  where temas.id='$id'";
        return parent::obtenerDatos($query);
    }

}

?>