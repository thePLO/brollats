const constraints = {
  name: {
      presence: { allowEmpty: false }
  },
  email: {
      presence: { allowEmpty: false },
      email: {onlyInteger: true}
  },
  phone: {
      presence: { allowEmpty: true },
      //numericality: true      
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
var phoneField = document.getElementById("phoneField");
phoneField.classList.remove("invalidForm");
var textField = document.getElementById("textField");
textField.classList.remove("invalidForm");

  const formValues = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
      message: form.elements.message.value
  };

  const errors = validate(formValues, constraints);

  if (errors) {
      event.preventDefault();
      //console.log(errors);
      if('name' in errors) nameField.classList.add("invalidForm");
      if('email' in errors) emailField.classList.add("invalidForm");
      if('phone' in errors) phoneField.classList.add("invalidForm");
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