window.onload = init();

function init() {
  document.getElementById("main").onsubmit = validateForm();
}

function validateForm() {
  const newForm = new FormValidate;
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const adressShipping = document.getElementById('adress');
  const cardName = document.getElementById('card-name');
  const cardNumber = document.getElementById('card-number');
  const cardCVV = document.getElementById('card-cvv');
  const checkboxTerms = document.getElementById("checkbox-terms");
  const country = document.getElementById("select-country");
  const submit = document.getElementById("main");
  let name = {
    firstName: firstName,
    lastName: lastName,
    adressShipping: adressShipping,
    cardName: cardName,
    cardNumber: cardNumber,
    cardCVV: cardCVV,
    country: country,
    checkboxTerms: checkboxTerms
  };
  const ui = new UI;
  for (let key in name) {
    newForm.validate(name[key], ui);
  }
  document.getElementById('submitbutton').addEventListener("click", function () {
    var cantsubmit = document.getElementsByClassName("alert error").length > 0;
    if (!cantsubmit) {
      document.getElementById('submitbutton').disabled = false;
      ui.showSuccess(submit);
    } else {
      document.getElementById('submitbutton').disabled = true;

    }
  });
}