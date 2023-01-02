<?php
require_once "conexion/conexion.php";
require_once "hilos.class.php";

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
        $query = "SELECT mensajes.id,mensajes.id_usuario,mensajes.id_hilo,mensajes.fecha,mensajes.texto_mensaje,usuarios.nombre  FROM mensajes join hilos on mensajes.id_hilo = hilos.id join usuarios on mensajes.id_usuario = usuarios.id inner join temas on hilos.id_temas = temas.id  where hilos.id = '$id'";

        return parent::obtenerDatos($query);
    }
    public function obtenerMensaje($id)
    {
        $query = " SELECT mensajes.id,mensajes.fecha,mensajes.texto_mensaje,usuarios.nombre,temas.temas,hilos.titulo_hilo  FROM mensajes join hilos on mensajes.id_hilo = hilos.id 
                    join usuarios on mensajes.id_usuario = usuarios.id inner join temas 
                    on hilos.id_temas = temas.id  where mensajes.id = '$id'";

        return parent::obtenerDatos($query);
    }

    public function post($json)
    {
        $datos = json_decode($json,true);
        if(isset($datos['texto_mensaje'])  && isset($datos['id_usuario'])
         && isset($datos['id_hilo']))
        {
            $this->texto_mensaje = $datos['texto_mensaje'];
            $this->fecha = $this->curdate();
            $this->id_usuario = $datos['id_usuario'];
            $this->id_hilo = $datos['id_hilo'];
            $resp = $this->isertMensaje();
            if(isset($resp))
            {
                return $resp;
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
        $query ="INSERT INTO ".$this->table . "(texto_mensaje,fecha,id_usuario,id_hilo) values('" . $this->texto_mensaje . "', '" . $this->fecha . "' ,'" . $this->id_usuario ."','" . $this->id_hilo . "')";
        $query_nombre = (new hilos)->obtenerHilo($this->id_hilo);
        $query_id = parent::nonQueryId($query,0);
        return $query_nombre;

    }
    function curdate() {
        return date('Y-m-d');
    }

}
?>