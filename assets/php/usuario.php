<?php
if (isset($_POST["username"])) {
    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $telefono = trim($_POST["telefono"]);
    $huellaSiNo = $_POST["compensation"];
    $estudianteSiNo = $_POST["estudiante"];

    echo $huellaSiNo;
    echo $estudianteSiNo;
}
   /* $servername = "localhost";
    $DBUser = "root";
    $DBPass = "";
    $DBname = "registros";

    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'usuario';

    $conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else {
        $sql = "INSERT INTO 'user' (`nombre`, `email`, `telefono`, `huella?`, `estudiante?`) VALUES ()"
        $result = $conn->query($sql);
    }

    
}*/
?>