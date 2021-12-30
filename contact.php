<!--<link rel="stylesheet" href="css/styles.css">-->
<link rel="stylesheet" href="css/styles.css">
<script src="https://kit.fontawesome.com/15ab96be69.js" crossorigin="anonymous"></script>
<body>
<section id="contacte">
    <h1>
        <span lang='ca' translate=true>Contacta amb nosaltres</span>
        <span lang='es' translate=true style='display:none;'>Contacta con nosotros</span>
        <span lang='en' translate=true style='display:none;'>Contact with us</span>
    </h1>

      <?php
        $errors = [];
        $errorMessage = '';

        $nameClassError = "";
        $emailClassError = "";
        $phoneClassError =  "";
        $messageClassError = "";

        $messageSent = false;

        if (!empty($_POST)) {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
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
            if (!empty($phone) and !is_numeric($phone)) {
                $errors[] = 'Phone is invalid';
                $phoneClassError = "invalidForm";
            }
            if (empty($message)) {
                $errors[] = 'Message is empty';
                $messageClassError = "invalidForm";
            }


            if (empty($errors)) {
                $toEmail = 'info@brollats.cat';
                $emailSubject = 'Contacte Brollats.cat - ' . $name;
                $headers = [/*'From' => $email, */'Reply-To' => $email, 'Content-type' => 'text/html;charset=UTF-8', 'MIME-Version' => '1.0'];
                $message = nl2br(htmlentities($message, ENT_QUOTES, 'UTF-8'));
                $timestamp = date('d/m/Y (H:i:s)');
                $bodyParagraphs = [
                    "<strong>Data:</strong> {$timestamp}",
                    "<strong>Nom:</strong> {$name}",
                    "<strong>Email:</strong> {$email}",
                    (empty($phone)) ? "" : "<strong>Mòbil:</strong> <a href='https://api.whatsapp.com/send?phone=34{$phone}'>{$phone}</a>",
                    "<strong>Missatge:</strong>",
                    $message
                ];
                $body = join('<br>', $bodyParagraphs);

                if (mail($toEmail, $emailSubject, $body, $headers)) {
                    $messageSent = true;/*header('Location: thank-you.html');*/
                } else {
                    $errorMessage = 'Oops, something went wrong. Please try again later';
                }
            } else {
                $allErrors = join('<br/>', $errors);
                $errorMessage = "<p class='formErrors' style='color: red;'>{$allErrors}</p>";
            }
        }
      ?>

    <div id="container_form">   
        <form action="" method="post" id="contact-form" autocomplete="chrome-off">
            
            <?php echo((!empty($errorMessage)) ? $errorMessage : '') ?>
            <div id="errorContainer" class="formErrors"></div>

            <label>
                <span lang='ca' translate=true>Nom*:</span>
                <span lang='es' translate=true style='display:none;'>Nombre*:</span>
                <span lang='en' translate=true style='display:none;'>Name*:</span>
            </label>
            <input id= "nameField" name="name" required type="text" value="" required class = "contacte <?= $nameClassError ?? '' ?> "/>

            <br>
            <label>
                <span lang='ca' translate=true>Email*:</span>
                <span lang='es' translate=true style='display:none;'>Email*:</span>
                <span lang='en' translate=true style='display:none;'>Email*:</span>
            </label>
            <input id= "emailField" style="cursor: pointer;" name="email" required value="" type="text" class="contacte <?= $emailClassError ?? '' ?> "/>

            <br>
            <label>
                <span lang='ca' translate=true>Mòbil:</span>
                <span lang='es' translate=true style='display:none;'>Móvil:</span>
                <span lang='en' translate=true style='display:none;'>Cell phone:</span>
            </label>
            <input id= "phoneField" style="cursor: pointer;" name="phone" pattern="[0-9]{9}" value="" type="tel" class="contacte <?= $phoneClassError ?? '' ?> "/>
            <span class="detall">
                <span lang='ca' translate=true>(Si vols que et contestem per Whatsapp)</span>
                <span lang='es' translate=true style='display:none;'>(Si quieres que te contestemos vía Whatsapp)</span>
                <span lang='en' translate=true style='display:none;'>(If you want us to answer you via Whatsapp)</span>
            </span>
            
            <br><br>
            <label>
                <span lang='ca' translate=true>Missatge*:</span>
                <span lang='es' translate=true style='display:none;'>Mensaje*:</span>
                <span lang='en' translate=true style='display:none;'>Message*:</span>
            </label>
            <textarea id= "textField" name="message" required class = "contacte <?= $messageClassError ?? '' ?>"></textarea>

            <div style="width:100%; text-align: center;">
                <input type="submit" value="Envia"/>
            </div>

        </form>
    </div>
    <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
    <script src="js/validateFormData.js"></script>
    <div id="idiomaSwapp">
        <script src="js/localized_data.js"></script>
        <script type="text/javascript">updateTexts();</script>
    </div>
</section>
</body>