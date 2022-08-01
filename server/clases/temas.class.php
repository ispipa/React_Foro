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
        print_r($datos);
        if(isset($datos['tema']) && isset($datos['img']['tmp_name']))
        {
            $this->temas_name = $datos['tema'];
            $this->img = $datos['img']['tmp_name'];
            $imgContent = addslashes(file_get_contents( $this->img));
            print_r($this->temas_name);
            echo "\n";
            print_r($this->img);
            echo "\n";
            $resp = $this->isertTema();
            if($resp)
            {
                //$respuesta = $respuesta->response;
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