<?php
    if(isset($_POST["submit"])){
        session_start ();
        $first_user_name = htmlspecialchars ($_POST["first_user_name"]);
        $last_user_name = htmlspecialchars ($_POST["last_user_name"]);
        $email_user = htmlspecialchars ($_POST["email_user"]);
        $phone_user_number = htmlspecialchars ($_POST["phone_user_number"]);
        $Message = htmlspecialchars ($_POST["Message"]);
        $to = 'admin@bitlomanka.top';
        $subject = " тема сообщения ";
        if (mail($to, $subject, $Message)) {
            echo "Message sent";    
        } else {
            echo "Error while sending message";    
        }
    }
    
?>    