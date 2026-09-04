<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/autoload.php';

$dados = json_decode(file_get_contents('php://input'));


function enviarEmail($dados){
    $mail = new PHPMailer(true);

    try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'rodrigohipnose@gmail.com';                     //SMTP username
        $mail->Password   = "";                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //a pessoa do formulario email que foi colocado no formulario
        $mail->setFrom($dados->email, 'Mailer');

        $mail->addAddress('rodrigohipnose@gmail.com', 'Joe User');     //Add a recipient
        
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $dados->assunto;
        $mail->Body    = $dados->mensagem;
       

        $mail->send();
        echo json_encode([
            "status"=> true,
            "mensagem"=>"E-mail Enviado com sucesso"
        ]);
    } catch (Exception $e) {
        echo json_encode([
            "status"=> false,
            "mensagem"=> "O erro foi: {$mail->ErrorInfo}"
        ]);
    }

}

enviarEmail($dados);