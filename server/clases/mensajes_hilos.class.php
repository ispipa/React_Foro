<?php
require_once "conexion/conexion.php";

class mensajes_hilos extends conexion
{
    private $table = "mensajes";
    private $mesajesId = "";
    private $texto_mensaje ="";
    private $fecha ="";
    private $id_usuario ="";
    private $id_hilo ="";

    //obtenemos los mensajes de un hilo a traves de su id
    public function obtenerMensajes($id)
    {
        $query = "SELECT titulo_hilo,descripcion_hilo,fecha_creacion,nombre,email,texto_mensaje FROM mensajes join hilos on mensajes.id_hilo = hilos.id join usuarios on mensajes.id_usuario = usuarios.id where hilos.id = '$id'";
        return parent::obtenerDatos($query);
    }

    public function post($json)
    {
        $datos = json_decode($json,true);
        if(isset($datos['texto_mensaje']) && isset($datos['fecha']) && isset($datos['id_usuario'])
         && isset($datos['id_hilo']))
        {
            $this->texto_mensaje = $datos['texto_mensaje'];
            $this->fecha = $datos['fecha'];
            $this->id_usuario = $datos['id_usuario'];
            $this->id_hilo = $datos['id_hilo'];
            $resp = $this->isertMensaje();
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
    public function isertMensaje()
    {
        $query ="INSERT INTO ".$this->table . "(texto_mensaje,fecha,id_usuario,id_hilo) values('" . $this->texto_mensaje . "','" . $this->fecha . "','" . $this->id_usuario ."','" . $this->id_hilo . "')";
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