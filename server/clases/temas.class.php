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

    public function post($json)
    {
        $datos = json_decode($json,true);
        if(isset($datos['tema']) && isset($datos['img']['tmp_name']))
        {
            $this->temas_name = $datos['tema'];
            $imgContent = addslashes(file_get_contents($datos['img']['tmp_name']));
            $this->img = $imgContent;
            $resp = $this->isertTema();
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

    //alta a un tema con img
    private  function isertTema()
    {
        
        $query ="INSERT INTO ".$this->table . "(temas,img) values('" . $this->temas_name . "','" . $this->img . "')";
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