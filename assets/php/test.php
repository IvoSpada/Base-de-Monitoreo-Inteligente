<?php
// Configuration
$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'airports';

// Create connection
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to retrieve data from the table
$sql = "SELECT iata, name FROM airport WHERE (iata IS NOT NULL) AND (name IS NOT NULL)";

// Execute the query
$result = $conn->query($sql);

// Check if the query was successful
if (!$result) {
    die("Query failed: " . $conn->error);
}

// Initialize array to hold the data
$data = array();

// Fetch data
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = array('iata' => $row['iata'], 'name' => $row['name']);
    }
}

// Output the data in JSON format
echo json_encode($data);

// Close the connection
$conn->close();
?>