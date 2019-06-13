class FormValidate {

  validate(element, objectUI) {
    var validationDataType = element.getAttribute('data-type');
    switch (validationDataType) {
      case 'name':
        return this.validateInputText(element, objectUI);
        break;
      case 'adress':
        return this.validateTextarea(element, objectUI);
        break;
      case 'checkbox':
        return this.validateInputCheckbox(element, objectUI);
        break;
      case 'nrcard':
        return this.validateInputCard(element, objectUI);
        break;
      case 'cvv':
        return this.validateInputCVV(element, objectUI);
        break;
      case 'country-drop_down':
        return this.validateDropDown(element, objectUI);
        break;

    }

  }

  validateTextarea(element, objectUI) {

    if (element.value.trim() == "") {
      objectUI.showAlert("Please fill out this field", "error", element);

    }
    element.addEventListener("keyup", function () {
      var letters = /^[0-9a-zA-Z,]+$/;
      if (element.value.trim() == "") {
        objectUI.clearAlert(element);
        objectUI.showAlert("Please fill out this field", "error", element);

      } else
      if (letters.test(element.value)) {
        objectUI.clearAlert(element);
        objectUI.showAlert("Hm, now I can find you!^-^", "success", element);

      } else {
        objectUI.clearAlert(element);
        objectUI.showAlert("Please input alphanumeric characters only", "error", element);
      }

    });
  }
  validateInputText(element, objectUI) {
    if (element.value.trim() == "") {

      objectUI.showAlert("Please fill out this field", "error", element);

    }
    element.addEventListener("keyup", function () {

      var letters = /^[a-zA-Z- ]+$/;
      if (element.value.trim() == "") {
        objectUI.clearAlert(element);
        objectUI.showAlert("Please fill out this field", "error", element);

      } else
      if (letters.test(element.value)) {
        objectUI.clearAlert(element);
        objectUI.showAlert("Nice to meet you!", "success", element);


      } else {
        objectUI.clearAlert(element);
        objectUI.showAlert("Please input letters only", "error", element);


      }

    })
  }
  validateInputCheckbox(element, objectUI) {

    if (!element.checked) {
      objectUI.showAlert("You must agree to the terms first.", "error", element.parentElement);
      element.focus();
    }
    element.addEventListener("change", e => {
      if (e.target.checked) {
        objectUI.clearAlert(element.parentElement);
        objectUI.showAlert("Thank you!", "success", element.parentElement);
      } else {
        objectUI.clearAlert(element.parentElement);
        objectUI.showAlert("You must agree to the terms first.", "error", element.parentElement);

      }

    });
  }
  validateInputCard(element, objectUI) {
    if (element.value.trim() == "") {
      objectUI.showAlert("You can try this eg.MasterCard: 5126478879845654", "error", element);

    }
    element.addEventListener("keyup", function () {
      var cardnr = /^(?:5[1-5][0-9]{14})$/;
      if (element.value.trim() == "") {
        objectUI.clearAlert(element);
        objectUI.showAlert("You can try this eg.MasterCard: 5126478879845654", "error", element);
      } else
      if (element.value.split(' ').join('').match(cardnr)) {
        objectUI.clearAlert(element);
        objectUI.showAlert("Your MasterCard is valid", "success", element);

      } else {
        objectUI.clearAlert(element);
        objectUI.showAlert("Please input only 16 digits", "error", element);
      }
    });
  }
  validateInputCVV(element, objectUI) {
    if (element.value.trim() == "") {
      objectUI.showAlert("Please add your CVV", "error", element);

    }
    element.addEventListener("keyup", function () {
      var cardnr = /^([0-9]{3})$/;
      if (element.value.trim() == "") {
        objectUI.clearAlert(element);
        objectUI.showAlert("Please add your CVV", "error", element);
      } else
      if (element.value.split(' ').join('').match(cardnr)) {
        objectUI.clearAlert(element);
        objectUI.showAlert("Your CVV is valid", "success", element);

      } else {
        objectUI.clearAlert(element);
        objectUI.showAlert("Please add only 3 digits", "error", element);
      }
    });

  }
  validateDropDown(element, objectUI) {
    if (element.value == "") {
      objectUI.showAlert("Please choose your country ", "error", element.parentElement);
      document.getElementById('city-autocomplete').disabled = true;
    }
    element.addEventListener("change", function () {
          objectUI.clearAlert(element.parentElement);
          objectUI.showAlert(`Please add your city from ${element.options[element.selectedIndex].text}`, "error", element.parentElement);
          document.getElementById('city-autocomplete').disabled = false;
    });
    let city = document.getElementById('city-autocomplete');
    city.addEventListener("keyup", function () {
      objectUI.clearAlert(element.parentElement);
      objectUI.showAlert("It's a beautiful city", "success", element.parentElement);
      document.getElementById('city-autocomplete').disabled = false;
});
  }
}
