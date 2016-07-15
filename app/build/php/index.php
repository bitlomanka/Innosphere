<?php
    if(isset($_POST["submit"])){
        session_start ();
        $first_user_name = htmlspecialchars ($_POST["first_user_name"]);
        $last_user_name = htmlspecialchars ($_POST["last_user_name"]);
        $email_user = htmlspecialchars ($_POST["email_user"]);
        $phone_user_number = htmlspecialchars ($_POST["phone_user_number"]);
        $message = htmlspecialchars ($_POST["message"]);
        $to = 'vikaa1190@mail.ru';
        $subject = "message from the site: http://innosphere.bitlomanka.top/";
        if (mail($to, $subject, 'Имя пользователя: '.$first_user_name."\r\n". 'Фамилия пользователя: '.$last_user_name."\r\n".'email: '.$email_user."\r\n".'Телефон:' .$phone_user_number."\r\n". 'Сообщение:'.$message)) {
            echo "message sent";    
        } else {
            echo "Error while sending message";    
        }
    }
    
?>    