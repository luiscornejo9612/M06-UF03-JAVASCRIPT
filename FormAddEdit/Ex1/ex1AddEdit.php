<?php
  
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "proba";

    // hola

    //  Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        
    }
        
    if(isset($_POST["nomProducte"]) && !empty($_POST["nomProducte"])){
        if($_POST["addEdit"]==0){
            $sql = "INSERT INTO peliculas (nom) VALUES ('" . $_POST["nomProducte"] ."')";
        
        }else{
            $sql = "UPDATE peliculas SET nom='" . $_POST["nomProducte"] . "' WHERE id=" . $_POST["addEdit"];
        }
        
        echo $sql;

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        
    }

    // Verifica si se ha enviado el ID del registro a eliminar
    if(isset($_GET["remove_id"]) && !empty($_GET["remove_id"])) {
        $remove_id = $_GET["remove_id"];
        var_dump($remove_id);
        // Consulta SQL para eliminar el registro con el ID proporcionado
        $sql = "DELETE FROM peliculas WHERE id = $remove_id";
        
        // Ejecuta la consulta
        if ($conn->query($sql) === TRUE) {
            echo "Record deleted successfully";
        } else {
            echo "Error deleting record: " . $conn->error;
        }
    }

    $conn->close();
    
    header('Location: ex1Llistat.php');

?>
