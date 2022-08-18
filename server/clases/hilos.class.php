<?php
require_once "conexion/conexion.php";

class hilos extends conexion
{
    private $table = "hilos";
    private $hilosId = "";
    private $titulo_name ="";
    private $descripcion_hilo ="";
    private $fecha_creacion_hilo ="";
    private $id_usuario ="";
    private $id_temas ="";

    //obtenemos los hilos de un tema a traves de su id
    public function obtenerHilos($id)
    {
        $query = "SELECT hilos.id,temas,titulo_hilo,fecha_creacion,nombre,Count(id_hilo) as mensajes FROM hilos 
        join temas on hilos.id_temas = temas.id 
        left join usuarios on usuarios.id = hilos.id_usuario
        left join mensajes on hilos.id = mensajes.id_hilo where hilos.id_temas = '$id' group by hilos.id";
        return parent::obtenerDatos($query);
    }

    public function post($json)
    {
        $datos = json_decode($json,true);
        if(isset($datos['titulo_hilo']) && isset($datos['descripcion_hilo']) && isset($datos['fecha_creacion'])
         && isset($datos['id_usuario']) && isset($datos['id_temas']))
        {
            $this->titulo_name = $datos['titulo_hilo'];
            $this->descripcion_hilo = $datos['descripcion_hilo'];
            $this->fecha_creacion_hilo = $datos['fecha_creacion'];
            $this->id_usuario = $datos['id_usuario'];
            $this->id_temas = $datos['id_temas'];
            $resp = $this->isertHilo();
            if($resp)
            {
                $respuesta['result'] = array("usuarioId" =>$resp);
                return json_encode($respuesta);
            }
            else
            {
                http_response_code(403);
                return json_encode(array("mesage" => "Todo mal"));
            }
        }
    }

    private  function isertHilo()
    {
        $query ="INSERT INTO ".$this->table . "(titulo_hilo,descripcion_hilo,fecha_creacion,id_usuario,id_temas) values('" . $this->titulo_name . "','" . $this->descripcion_hilo . "','" . $this->fecha_creacion_hilo ."','" . $this->id_usuario . "','" . $this->id_temas . "')";
        $resp = parent::nonQueryId($query);
        if($resp)
        {
            return $resp;
        }
        else
        {
           return 0;
        }
    }

}

?>