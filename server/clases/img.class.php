<?php
require_once "conexion/conexion.php";

class img extends conexion
{
    private $table = "imagenes";
    private $usuarios_id = "";
    private $img = "";

    public function insertImage($datos,$id,$bool){
        $image = $datos['tmp_name'];
        $imgContenido = base64_encode(file_get_contents($image));
        $imgSrc = 'data:'.mime_content_type($image).';base64,'.$imgContenido;
        $this->usuarios_id = $id;
        $this->img = $imgSrc;
        if($bool){
            return $this->img;
        }
        $query_username = "SELECT usuarios_id FROM " . $this->table . " where usuarios_id='$this->usuarios_id'";
        $resp_name = parent::nonQuery($query_username);
        if($resp_name == 0){
            $query = "INSERT INTO ".$this->table . "(usuarios_id,img) values('" . $this->usuarios_id . "','" . $this->img . "')";
            $resp = parent::nonQueryId($query,0);
        }
        else if($resp_name == 1){
            $resp = $this->updateImg();
        }
        return $resp;
    }

    public function updateImg(){
        $query = "UPDATE ".$this->table . " SET img='" . $this->img . "' where usuarios_id='" . $this->usuarios_id ."'";
        $resp = parent::nonQuery($query);
        return $resp;
    }
}

?>