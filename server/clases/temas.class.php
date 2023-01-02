<?php
require_once "conexion/conexion.php";
require_once "img.class.php";

class temas extends conexion
{
    private $table = "temas";
    private $temasId = "";
    private $temas_name ="";
    private $img ="";
   
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
        if(isset($datos['tema']))
        {
            $this->temas_name = $datos['tema'];
            if(isset($datos['img']))
            {
                $resp = (new img())->insertImage($datos['img'],null,true);
                $this->img = $resp;
            }
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

    private function procesarImg($img)
    {
       $target_dir = dirname(__DIR__) . "\public\img\\";
       $target_file = str_replace('\\','/' ,$target_dir . basename($img["name"]));
       $target = "http://" . $_SERVER["HTTP_HOST"]. "server/public/img/" . basename($img["name"]);
       if (move_uploaded_file($img["tmp_name"], $target_file)) 
       {
           return $target;
       }
    }

    //alta a un tema con img
    private  function isertTema()
    {
        
        $query ="INSERT INTO ".$this->table . "(temas,img) values('" . $this->temas_name . "','" . $this->img . "')";
        $resp = parent::nonQueryId($query,0);
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