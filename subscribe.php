<?php
	$mail = $_POST['mail'];
	$subject = "Subscription to jonggring.com";
	$text = $_POST['text'];
	
 $to = "jonggringgarment@gmail.com";
 $message =" You received  a subscription mail from ".$mail ."\r\n\r\n";
 $message .=" This email address is now subscribed to jonggring.com  : ".$mail;

 if(mail($to, $subject,$message)){
	echo "Subscribed!";
} 
else{ 
	echo "There's some errors to send the mail, verify your server options";
}
?>
