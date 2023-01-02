<?php
require_once "conexion/conexion.php";
require_once "img.class.php";

class usuarios extends conexion
{
        private $table = "usuarios";
        private $usuarioId = "";
        private $user_name ="";
        private $user_password="";
        private $user_email="";

        //obtenemos una lista de una pagina de usuarios
        public function listUsuarios($pagina = 1)
        {
            $inicio  = 0 ;
            $cantidad = 100;
            if($pagina > 1){
                $inicio = ($cantidad * ($pagina - 1)) +1 ;
                $cantidad = $cantidad * $pagina;
            }
            $query = "SELECT id,nombre,contraseña,email FROM " . $this->table . " limit $inicio,$cantidad";
            $datos = parent::obtenerDatos($query);
            return $datos;
        }

        //obtenemos un usuario a traves de su id
        public function obtenerUsuario($id)
        {
            $query = "SELECT nombre,email,imagenes.img FROM usuarios 
                      left join imagenes on usuarios.id = imagenes.usuarios_id where usuarios.id='$id'";
            return parent::obtenerDatos($query);
        }

        public function post($json)
        {
            $datos = json_decode($json,true);
            if(isset($datos['nombre']) && isset($datos["password"]) && isset($datos['email']))
            {
                $this->user_name = $datos['nombre'];
                $this->user_password = $datos['password'];
                $this->user_email = $datos['email'];
                $resp = $this->isertUser();
                switch ($resp) {
                    case $resp["code_name"] == 1 && $resp["code_email"] == 1:
                            http_response_code(403);
                            return json_encode(array("code" => "15"));//El nombre y correo  ya estan en uso
                    case $resp["code_name"] == 0 && $resp["code_email"] == 1:
                            http_response_code(403);
                            return json_encode(array("code" => "10"));//El correo ya esta en uso
                    case $resp["code_name"] == 1 && $resp["code_email"] == 0:
                            http_response_code(403);
                            return json_encode(array("code" => "5"));//El nombre ya esta en uso
                    case $resp["code_register"] != "":
                            http_response_code(200);
                            return json_encode(array("code" => "0","nombre" => $this->user_name));//El usuario se registro correctamente
                    default:
                        return json_encode(array("code" => "25"));//problema al registar al usuario
                }
            }
        }

        //modificamos al usuario
        public function put($json)
        {
            $datos = json_decode($json,true);
            if(isset($datos['id']))
            {
                $this->usuarioId = $datos['id'];
                $this->user_name = $datos['nombre'];
                $this->user_password = $datos['password'];
                $this->user_email = $datos['email'];
                $query_username = "SELECT nombre FROM " . $this->table . " where nombre='$this->user_name'";
                $resp_name = parent::nonQuery($query_username);
                if($resp_name == 0){
                    $resp = $this->modifyUser($datos['img']);
                    if(isset($resp)){
                        $response['result'] = $this->obtenerUsuario($this->usuarioId);
                        return  $response;
                    }
                    else{
                        return array("code" => "25");//problema al modificar al usuario
                    }
                }
                else{
                    http_response_code(403);
                    return array("code" => "5");//El nombre ya esta en uso
                }
            }
        }
        //modificacion del usuario
        private  function modifyUser($img)
        {
            $response = ["user"=>"" , "img" => ""];
            $query ="UPDATE ".$this->table . " SET nombre='" . $this->user_name . "',password='" . $this->user_password . "',email='" . $this->user_email ."' where id='" . $this->usuarioId ."'";
            $resp = parent::nonQuery($query);
            $resp_img = (new img())->insertImage($img,$this->usuarioId);
            $response["user"] = $resp;
            $response["img"] = $resp_img;
            return $response;

        }
        //alta a un usuario
        private  function isertUser()
        {
            $response = ["code_name"=>0,"code_email"=>0,"code_register"=>""];
            $query_username = "SELECT nombre FROM " . $this->table . " where nombre='$this->user_name'";
            $query_email = "SELECT email FROM " . $this->table . " where email='$this->user_email'";
            $resp_name = parent::nonQuery($query_username);
            $resp_email = parent::nonQuery($query_email);
            $response["code_name"] = $resp_name;
            $response["code_email"] = $resp_email;
            if($resp_name == 0 && $resp_email == 0)
            {
                $query ="INSERT INTO ".$this->table . "(nombre,password,email) values('" . $this->user_name . "','" . $this->user_password . "','" . $this->user_email . "')";
                $resp = parent::nonQueryId($query,0);
                $response["code_register"] = $resp;
                return $response;
            }
            else 
            {
                return $response;
            }
        }

        //login usuario
        public function login($json)
        {
            $datos = json_decode($json,true);
            $query = "SELECT id,nombre,password FROM usuarios WHERE email ='$datos[email]'";
            $resp = parent::nonQueryEmail($query);
            $response = ["id"=>"","nombre"=>""];
            if($resp)
            {
                if($datos["password"] != $resp["password"])
                {
                    http_response_code(404);
                    return json_encode(array("code" => "15"));//Credenciales invalidas
                }
                $response["id"] = $resp["id"];
                $response["nombre"] = $resp["nombre"];
                return $response;
            }
            else
            {
                http_response_code(404);
                return json_encode(array("code" => "20"));//Usuario no registrado"
            }
        }
}
?>