<html>
<link rel="stylesheet" href="css/styles.css">
<style type="text/css">
    #errorContainer{
        /*border:  black 1px solid;*/
    }
    .invalidForm{
        border:  red 1px solid;
    }
    #container_form{
        width: 90%;
        max-width: 1400px;
        min-height: 100%;
        margin: auto;
        margin-top: 30px;
        margin-bottom: 50px;

        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }
    form{
        border-radius: 10px;
        height: 75%;
        width: 80%;
        max-width: 1000px;
        background-color: rgba(255,255,255,.6);
        padding: 30px;
        /*margin:auto;*/
        text-align: left;
    }
    form label{
        width:72px;
        font-weight:bold;
        display:inline-block;
        text-align: right;
    }

    form input[type="text"],
    form input[type="email"]{
        width:180px;
        padding:3px 10px;
        border: none;
        border-bottom: 2px solid blue;
        background-color:rgb(191, 229, 255);
        margin:8px 0;
        display:inline-block;
    }

    form input[type="submit"]{
        appearance: button;
        border: none;
        text-decoration: none;
        cursor: pointer;
        font-size: 1.5em;
        background: #0082d9;
        color:white;
        margin:20px;
        padding: 20px;
        border-radius: 20px;
    } 

    form input[type="submit"]:hover{
        cursor:pointer;
    }

    textarea{
        width:100%;
        height:300px;
        /*border:1px solid #f6f6f6;*/
        border-radius:3px;
        background-color:rgb(191, 229, 255);         
        margin:8px 0;
        /*resize: vertical | horizontal | none | both*/
        resize:none;
        display:block;
    }
</style>
<body>
    <section id="contacte">
        <h1>Contacte</h1>

        <?php
        $errors = [];
        $errorMessage = '';

        $nameClassError = "";
        $emailClassError = "";
        $messageClassError = "";

        $messageSent = false;

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
                $emailSubject = 'Contacte Brollats.cat - ' . $name;
                $headers = ['From' => $name, 'Reply-To' => $email, 'Content-type' => 'text/html;charset=UTF-8', 'MIME-Version' => '1.0'];

                $timestamp = date('l jS \of F Y h:i:s A');
                $bodyParagraphs = ["<strong>Data:</strong> {$timestamp}", "<strong>Nom:</strong> {$name}", "<strong>Email:</strong> {$email}", "<strong>Missatge:</strong>", $message];
                $body = join('<br>', $bodyParagraphs);

                if (mail($toEmail, $emailSubject, $body, $headers)) {
                    $messageSent=true;
                } else {
                    $errorMessage = 'Oops, something went wrong. Please try again later';
                }
            } else {
                $allErrors = join('<br/>', $errors);
                $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
            }
        }
        ?>
        <div id="container_form">   
            <form action="testMailphp2.php" method="post" id="contact-form">
            
                <?php echo((!empty($errorMessage)) ? $errorMessage : '') ?>
                <div id="errorContainer"></div>

                <label>Nom:</label>
                <input id= "nameField" name="name" type="text" value="" class = "contacte <?= $nameClassError ?? '' ?> "/>

                <br>
                <label>Email:</label>
                <input id= "emailField" style="cursor: pointer;" name="email" value="" type="text" class = "contacte <?= $emailClassError ?? '' ?> "/>
                
                <br><br>
                <label>Missatge:</label>
                <textarea id= "textField" name="message" class = "contacte <?= $messageClassError ?? '' ?>"></textarea>

                <input type="submit" value="Send"/>

            </form>
        </div> 
    </section>
  
    <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
    <script>
        const constraints = {
          name: {
              presence: { allowEmpty: false }
          },
          email: {
              presence: { allowEmpty: false },
              email: true
          },
          message: {
              presence: { allowEmpty: false }
          }
        };

        const form = document.getElementById('contact-form');

        form.addEventListener('submit', function (event) {
        var errorsContainer = document.getElementById("errorContainer");
        errorsContainer.innerHTML = "";
        errorsContainer.display = "none";
        //invalidForm
        var nameField = document.getElementById("nameField");
        nameField.classList.remove("invalidForm");
        var emailField = document.getElementById("emailField");
        emailField.classList.remove("invalidForm");
        var textField = document.getElementById("textField");
        textField.classList.remove("invalidForm");

          const formValues = {
              name: form.elements.name.value,
              email: form.elements.email.value,
              message: form.elements.message.value
          };

          const errors = validate(formValues, constraints);

          if (errors) {
              event.preventDefault();
              console.log(errors);
              if('name' in errors) nameField.classList.add("invalidForm");
              if('email' in errors) emailField.classList.add("invalidForm");
              if('message' in errors) textField.classList.add("invalidForm");
              const errorMessage = Object
                  .values(errors)
                  .map(function (fieldValues) {
                      return fieldValues.join(', ')
                  })
                  .join("<br>");

                  errorsContainer.innerHTML = errorMessage;
                  errorsContainer.display = "block";
              //alert(errorMessage);
          }
        }, false);
    </script>
</body>
</html>