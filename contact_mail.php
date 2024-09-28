<?php
$fromName = "iProgrammer Contact Form";
$fromMail = "admin@iprogrammer.me";
$toEmail = "eng.parsasajjadi@yahoo.com";
$emailSubject = $_POST["msg_subject"];
$emailBody = "From = " . $_POST["name"] . "<" . $_POST["email"] . ">";
$emailBody .= "\r\n" .$_POST["msg_text"];

if(utf8mail($fromName,$fromEmail,$toEmail, $emailSubject, $emailBody)) {
        echo 1;
} else {
        echo 0;
}

function utf8mail($from_name,$from_email,$to_Email,$subject,$body)
{
    $subject= "=?utf-8?b?".base64_encode($subject)."?=";
    
    $headers = "MIME-Version: 1.0\r\n";
    //$headers.= "From: =?utf-8?b?".base64_encode($from_name)."?= <".$from_email.">\r\n";
    $headers.= "From: ".$from_name."<".$from_email.">\r\n";
    //$headers.= "From: ".$from_email.">\r\n";
    $headers.= "Content-Type: text/plain;charset=utf-8\r\n";
    $headers.= "X-Mailer: PHP/" . phpversion();
    
    return mail($to_Email, $subject, $body, $headers);
}
?>