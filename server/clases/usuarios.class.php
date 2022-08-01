<?php
require_once "conexion/conexion.php";

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
            $query = "SELECT * FROM " . $this->table . " where id='$id'";
            return parent::obtenerDatos($query);;
        }

        public function post($json)
        {
            $datos = json_decode($json,true);
            print_r($datos);
            if(isset($datos['user']) && isset($datos["password"]) && isset($datos['email']))
            {
                $this->user_name = $datos['user'];
                $this->user_password = $datos['password'];
                $this->user_email = $datos['email'];
                $resp = $this->isertUser();
                if($resp)
                {
                    //$respuesta = $respuesta->response;
                    $respuesta['result'] = array("usuarioId" =>$resp);
                    return json_encode($respuesta);
                }
                else
                {
                    http_response_code(403);
                    return json_encode(array("mesage" => "El email ya esta en uso"));
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
                $this->user_password = $datos['contraseña'];
                $this->user_email = $datos['email'];
                $resp = $this->modifyUser();
                if($resp)
                {
                    //$respuesta = $respuesta->response;
                    $respuesta['result'] = array("usuarioId" =>$this->usuarioId);
                    return $respuesta;
                }
                else
                {
                    return "todo mal";
                }
            }
        }
        //modificacion del usuario
        private  function modifyUser()
        {
            $query ="UPDATE ".$this->table . " SET nombre='" . $this->user_name . "',contraseña='" . $this->user_password . "',email='" . $this->user_email ."' where id='" . $this->usuarioId ."'";
            $resp = parent::nonQuery($query);
            if($resp >= 1)
            {
                return $resp;
            }
            else
            {
               return 0;
            }
        }
        //alta a un usuario
        private  function isertUser()
        {
            
            $query ="INSERT INTO ".$this->table . "(nombre,contraseña,email) values('" . $this->user_name . "','" . $this->user_password . "','" . $this->user_email . "')";
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

        //login usuario
        public function login($json)
        {
            $datos = json_decode($json,true);
            $query = "SELECT * FROM usuarios WHERE email ='$datos[email]'";
            $resp = parent::nonQueryEmail($query);
            if($resp)
            {
                if($datos["contraseña"] != $resp["contraseña"])
                {
                    http_response_code(404);
                    return json_encode(array("mesage" => "Credenciales invalidas"));
                }
                return $resp;
            }
            else
            {
                http_response_code(404);
                return json_encode(array("mesage" => "Usuario no registrado"));
            }
        }
}
?>