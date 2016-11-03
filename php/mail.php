<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $email \nMessage: $message";
$recipient = "aurele@oules.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail("$recipient", $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . $email;
?>
