<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = 'From: ' . $email . "\r\n";
$header .= 'X-Mailer: PHP/' . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n ";
$header .= 'Content-Type: text/plain';

$message = 'Este mensaje fue enviado por: ' . $nombre . $apellido . "\r\n";
$message .= 'Su email es: ' . $email . "\r\n";
$message .= 'Mensaje: ' . $_POST['message'] . "\r\n";
$message .= 'Enviado el: ' . date('d/m/Y', time());

$para = 'ohwa.marketingdigital@gmail.com';
$asunto = 'Asunto del mensaje';

email($para, $asunto, utf8_decode($message), $header);

header('Location:index.html');
?>
