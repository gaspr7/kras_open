<?php
$servername = "localhost";
$username = "root";  // Spremeni, če si nastavil drugače
$password = "";
$dbname = "kras";  // Ime tvoje baze

// Ustvari povezavo
$conn = new mysqli($servername, $username, $password, $dbname);

// Preveri povezavo
if ($conn->connect_error) {
    die("Povezava ni uspela: " . $conn->connect_error);
} else {
    echo "oujea dela";
}


?>