<?php

$errors = [];
$errorMessage = '';

$nameClassError = "";
$emailClassError = "";
$messageClassError = "";

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if (empty($name)) {
        $errors[] = 'Name is empty';
        $nameClassError = "invalidForm";
    }
    if (empty($email)) {
        $errors[] = 'Email is empty';
        $emailClassError = "invalidForm";
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
        $emailClassError = "invalidForm";
    }

    if (empty($message)) {
        $errors[] = 'Message is empty';
        $messageClassError = "invalidForm";
    }


    if (empty($errors)) {
        $toEmail = 'poldemiguel@gmail.com';
        $emailSubject = 'Formulari Brollats.cat - ' . $name;
        $headers = ['From' => $name, 'Reply-To' => $email, 'Content-type' => 'text/html;charset=UTF-8'];

        $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", $message];
        $body = join('<br>', $bodyParagraphs);

        if (mail($toEmail, $emailSubject, $body, $headers)) {
            echo('Location: thank-you.html');
        } else {
            $errorMessage = 'Oops, something went wrong. Please try again later';
        }
    } else {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    }
}

?>