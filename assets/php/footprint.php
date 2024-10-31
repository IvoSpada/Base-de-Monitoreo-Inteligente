<?php
if (isset($_POST['country'])) {
    $country = $_POST['country'];
}

$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'countries';

$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT footprint FROM country where name = '$country'";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row['footprint'];
    }
}

json_encode(['country' => $data]);
header("Location: http://bim/calculadora.html");


$conn->close();

/*
$y = 3; // Example value for y
$x = 0; // Initialize x

switch (true) {
    case ($y >= 0 && $y <= 5):
        $x = 10; // Set x to 10 if y is between 0 and 5
        break;
    // Add more cases as needed for other ranges
    default:
        $x = 0; // Default value for x
}

echo json_encode(['x' => $x]); // Return the value of x as JSON

javascript:

fetch('get_x.php')
    .then(response => response.json())
    .then(data => {
        var x = data.x; // Get the value of x from the response
        console.log("Value of x:", x); // Use x in your JavaScript
    })
    .catch(error => console.error('Error fetching x:', error));
*/
?>




