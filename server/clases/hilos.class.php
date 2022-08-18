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
        $query = "SELECT hilos.id,temas,titulo_hilo,fecha_creacion,nombre,Count(id_hilo) FROM hilos 
        join temas on hilos.id_temas = temas.id 
        left join usuarios on usuarios.id = hilos.id_usuario
        left join mensajes on hilos.id = mensajes.id_hilo where hilos.id_temas = '$id' group by hilos.id";
        return parent::obtenerDatos($query);
    }
    private  function isertHilo()
    {
        
       echo "estoy insertando un hilo";
    }

}

?>