<?php
$data = json_decode(file_get_contents("php://input"), true);

$totalEmissionsAuto = $data['totalEmissionsAuto'];
$totalEmissionsMoto = $data['totalEmissionsMoto'];
$totalEmissionsViv = $data['totalEmissionsViv']; // NOT IN TONS
$totalEmissionsVuelos = $data['totalEmissionsVuelos'];
$totalEmissionsBondi = $data['totalEmissionsBondi'];
$FK = $data['foreignKey'];

$totalEmissionsViv = $totalEmissionsViv / 1000; // in tons :)

$total = $totalEmissionsAuto + $totalEmissionsViv + $totalEmissionsVuelos + $totalEmissionsMoto + $totalEmissionsBondi;

// Configurar el encabezado para indicar que la respuesta es JSON
header('Content-Type: application/json');

// Leer los datos enviados por el cliente
$data = json_decode(file_get_contents("php://input"), true);

// Verificar si los datos se han recibido correctamente
if ($data) {
    // database process
    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'users';

    $conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else {
        $FK += 1;
        $sql = ("INSERT INTO footprint (id_user, vivienda, vuelos, coches, moto, bondi, total) VALUES ($FK, $totalEmissionsViv, $totalEmissionsVuelos, $totalEmissionsAuto, $totalEmissionsMoto, $totalEmissionsBondi, $total);");
        $result = $conn->query($sql);
    }
} 
else {
    // Si no se reciben datos válidos, devolver un error
    echo json_encode(['status' => 'error', 'message' => 'Datos no válidos']);
}

?>
