<?php

class conexion 
{
    private $server;
    private $user;
    private $password;
    private $port;
    private $conexion;

    function __construct()
    {
       $listDatos = $this->datosConexion();
       foreach ($listDatos as $key => $value)
       {
            $this->server = $value['server'];
            $this->user = $value['user'];
            $this->password = $value['password'];
            $this->database = $value['database'];
            $this->port = $value['port'];
       }
       $this-> conexion = new mysqli($this->server,$this->user,$this->password,$this->database,$this->port);
       if($this->conexion->connect_errno)
       {
            echo "fallo al conectar con la api";
            die();
       }
    }
    //obetenmos una lista de usuarios de la tabla de usuarios
    public function obtenerDatos($sqlstr)
    {
     $results = $this->conexion->query($sqlstr);
     $resultArray = array();
     foreach ($results as $key)
     {
         $resultArray[] = $key;
     }
     return $resultArray;
     }

    private function datosConexion()
    {
        $direccion = dirname(__FILE__);
        $jsondata = file_get_contents($direccion . "/" . "config.json");
        return json_decode($jsondata, true);
    }

    public function nonQuery($sqlstr)
    {
        $results = $this->conexion->query($sqlstr);
        return $this->conexion->affected_rows;
    }
    public function nonQueryEmail($sqlstr)
    {
        $results = $this->conexion->query($sqlstr);
        return mysqli_fetch_assoc($results);
    }

    //insertar datos
     public function nonQueryId($sqlstr)
    {
        try 
        {
            $results = $this->conexion->query($sqlstr);
            $filas = $this->conexion->affected_rows;
            $idRegister = $this->conexion->insert_id;   
            $dataResult = $this ->getDataInsert($idRegister);

            if($filas >= 1)
            {
              return $dataResult;
            }
            else
            {
              return 0;
            }
        } 
        catch (Exception $e) 
        {
            $e->getMessage();
        }
    }

    private function getDataInsert($data){
        $query = "SELECT hilos.id, temas.temas, temas.id as id_tema FROM hilos INNER JOIN temas ON hilos.id = '$data' AND temas.id= hilos.id_temas;";
        try {
            $results = $this->conexion->query($query);
            $dataResult = mysqli_fetch_assoc($results);   
            return $dataResult;
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

}


?>