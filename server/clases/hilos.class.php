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
        $query = "SELECT temas,titulo_hilo,fecha_creacion,nombre,Count(id_hilo) as mensajes FROM hilos inner join temas on hilos.id_temas = temas.id inner join usuarios  on usuarios.id = hilos.id_usuario inner join mensajes on hilos.id = mensajes.id_hilo where temas.id = '$id' group by hilos.id";
        return parent::obtenerDatos($query);
    }

}

?>