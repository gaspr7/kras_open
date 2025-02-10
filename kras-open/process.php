<?php 
    if($_SERVER['REQUEST_METHOD'] == "POST") {
        $igralec1 = $_POST["igralec1"];
        $igralec2 = $_POST["igralec2"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];

        $subject = "Prijava na Kras Open";
        $to = "tackosimpson@gmail.com";
        $headers = "From: $email\r\n";
        
        $message = "Prijava na Kras Open:\n\n";
        $message .= "Igralec 1: $igralec1\n";
        $message .= "Igralec 2: $igralec2\n\n";
        $message .= "Email: $email\n";
        $message .= "Telefon: $phone\n";
        
        if(mail($to, $subject, $message, $headers)) {
            $status = 'success'; 
        } else {
            $status = 'failure';
        }
        header("Location: " . $_SERVER['PHP_SELF']);
        exit();
    }
?>
