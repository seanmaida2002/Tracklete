document.addEventListener("DOMContentLoaded", function () {
  /// connect to submit
  let signUpFormElement = document.getElementById("signup-form");
  if (signUpFormElement !== null) {
    signUpFormElement.addEventListener("submit", (event) => {
      if (!isFormValid()) {
        event.preventDefault();
      }

      let formData = new FormData(signUpFormElement);
      let firstName = formData.get("firstName");
      let lastName = formData.get("lastName");
      let username = formData.get("username");
      let password = formData.get("password");
      let confirmPassword = formData.get("confirmPassword");
      let email = formData.get("email");
      let age = formData.get("age");
      let gender = formData.get("gender");
      let heightFt = formData.get("heightFt");
      let heightIn = formData.get("heightIn");
      let weightNum = formData.get("weightNum");
      let weightUnit = formData.get("weightUnit");
      let sports = formData.get("sports");
      let healthInformation = formData.get("healthInformation");
      
    //   $.ajax({
    //     type: "POST",
    //     url: "/register",
    //     dataType: json,
    //     data: {
    //       firstName: firstName,
    //       lastName: lastName,
    //       username: username,
    //       password: password,
    //       confirmPassword: confirmPassword,
    //       email: email,
    //       age: age,
    //       gender: gender,
    //       heightFt: heightFt,
    //       heightIn: heightIn,
    //       weightNum: weightNum,
    //       weightUnit: weightUnit,
    //       sports: sports,
    //       healthInformation: healthInformation
    //     },
    //   })
    //     .done(function (repsone) {
    //       console.log("Registration successful");
    //       window.location.replace("/login");
    //     })
    //     .fail(function (xhr, status, errorThrown) {
    //       console.log("Error: " + errorThrown);
    //       console.log("Status: " + status);
    //       let errorMessage;
    //       if (xhr.responseJSON && xhr.responseJSON.message) {
    //         errorMessage = xhr.responseJSON.message;
    //       } else {
    //         errorMessage =
    //           "An error occured when trying to register. Please try again";
    //       }
    //       $(".registerError").text(errorMessage);
    //     });
    // });
    });
  }

  const inputFields = document.querySelectorAll("input, select");
  inputFields.forEach((inputField) => {
    inputField.addEventListener("input", clearError);
  });
});

function clearError(event) {
  const fieldName = event.target.id;
  let errorElement = document.getElementById(`${fieldName}Error`);
  if (fieldName === "heightFt") {
    errorElement = document.getElementById("heightError");
  }
  if (fieldName === "heightIn") {
    errorElement = document.getElementById("heightError");
  }
  if (fieldName === "weightNum") {
    errorElement = document.getElementById("weightError");
  }

  if (errorElement) {
    errorElement.textContent = "";
  }
}

function isFormValid() {
  let badFields = false;
  /// firstName
  let firstNameField = document.getElementById("firstName");
  if (firstNameField !== null) {
    let firstNameValue = firstNameField.value;
    let firstNameError = document.getElementById("firstNameError");

    if (typeof firstNameValue !== "string") {
      firstNameError.textContent = "First Name must be a string";
      badFields = true;
    }
    firstNameValue = firstNameValue.trim();

    if (firstNameValue.length < 2 || firstNameValue.length > 25) {
      firstNameError.textContent =
        "First Name must be between 2 and 25 letters";
      badFields = true;
    }
    if (firstNameValue.length === 0) {
      firstNameError.textContent = "Must enter a first name";
      badFields = true;
    }
    const nameRegex = /[^a-zA-Z-]/;

    if (nameRegex.test(firstNameValue)) {
      firstNameError.textContent = `First Name must only contain letters and the '-' character.`;
      badFields = true;
    }
  }
  //// last name
  let lastNameField = document.getElementById("lastName");
  if (lastNameField !== null) {
    let lastNameValue = lastNameField.value;
    let lastNameError = document.getElementById("lastNameError");

    if (typeof lastNameValue !== "string") {
      lastNameError.textContent = "Last Name must be a string!";
      badFields = true;
    }
    lastNameValue = lastNameValue.trim();

    if (lastNameValue.length < 2 || lastNameValue.length > 25) {
      lastNameError.textContent = "Last Name must be between 2 and 25 letters";
      badFields = true;
    }

    if (lastNameValue.length === 0) {
      lastNameError.textContent = "Must enter a last name";
      badFields = true;
    }

    const nameRegex = /[^a-zA-Z-]/;

    if (nameRegex.test(lastNameValue)) {
      lastNameError.textContent = `Last Name must only contain letters and the '-' character.`;
      badFields = true;
    }
  }
  //// username
  let usernameField = document.getElementById("username");
  if (usernameField !== null) {
    let usernameValue = usernameField.value;
    let usernameError = document.getElementById("usernameError");

    if (typeof usernameValue !== "string") {
      usernameError.textContent = "Username must be a string";
      badFields = true;
    }
    usernameValue = usernameValue.trim().toLowerCase();
    if (usernameValue.length < 3 || usernameValue.length > 12) {
      usernameError.textContent =
        "Username must be between 3 and 12 characters";
      badFields = true;
    }
    if (usernameValue.length === 0) {
      usernameError.textContent = "Must enter a username";
      badFields = true;
    }

    const usernameRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (usernameRegex.test(usernameValue)) {
      usernameError.textContent =
        "Username cannot contain any special characters";
      badFields = true;
    }

    let regexUsername = /\s/;
    if(regexUsername.test(usernameValue)){
      usernameError.textContent = "Username cannot contain spaces";
      badFields = true;
    }
  }

  //// email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
  let emailField = document.getElementById("email");
  if (emailField !== null) {
    let emailValue = emailField.value;
    emailValue = emailValue.trim().toLowerCase();
    let emailError = document.getElementById("emailError");
    if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Must enter a valid email";
      badFields = true;
    }
  }

  //// password
  let passwordField = document.getElementById("password");
  if (passwordField !== null) {
    let passwordValue = passwordField.value;
    let passwordError = document.getElementById("passwordError");

    if (typeof passwordValue !== "string") {
      passwordError.textContent = "Password must be a string";
      badFields = true;
    }
    passwordValue = passwordValue.trim();
    if (/\s/.test(passwordValue)) {
      passwordError.textContent = "Password cannot contain spaces";
      badFields = true;
    }
    if (passwordValue.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters long";
      badFields = true;
    }
    let passwordArray = passwordValue.split("");
    let hasUpp = false;
    let hasNum = false;
    let hasSpe = false;
    passwordArray.forEach((char) => {
      if (/[A-Z]/.test(char)) {
        hasUpp = true;
      }
      if (/^\d$/.test(char)) {
        hasNum = true;
      }
      if (!/[a-zA-Z0-9\s]/.test(char)) {
        hasSpe = true;
      }
    });
    if (!hasUpp || !hasNum || !hasSpe) {
      passwordError.textContent =
        "Password must have at least 1 uppercase letter, 1 number, and 1 special character";
      badFields = true;
    }
  }

  /// confirm password
  let confirmPasswordField = document.getElementById("confirmPassword");
  if (confirmPasswordField !== null) {
    let confirmPasswordValue = confirmPasswordField.value;
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    let passwordField = document.getElementById("password");
    let passwordValue = passwordField.value;
    if (passwordValue !== confirmPasswordValue) {
      confirmPasswordError.textContent = "Passwords must match";
      badFields = true;
    }
  }

  //// age
  let ageField = document.getElementById("age");
  if (ageField !== null) {
    let ageValue = ageField.value;
    let ageError = document.getElementById("ageError");

    if (typeof ageValue !== "string") {
      ageError.textContent = "Age must be a string";
      badFields = true;
    }
    ageValue = ageValue.trim();
    if (ageValue.length === 0) {
      ageError.textContent = "Must enter your age";
      badFields = true;
    }

    if (isNaN(ageValue)) {
      ageError.textContent = "Age must be a number";
    } else {
      if (ageValue % 1 !== 0) {
        ageError.textContent = "You must enter a whole number";
        badFields = true;
      }
      if (parseInt(ageValue) < 13) {
        ageError.textContent = "You must be 13 years old to use Tracklete";
        badFields = true;
      }
      if (parseInt(ageValue) > 100) {
        ageError.textContent = "You must enter a valid age";
        badFields = true;
      }
    }
  }

  //// height
  let heightFtField = document.getElementById("heightFt");
  let heightInField = document.getElementById("heightIn");
  if (heightFtField !== null) {
    let heightFtValue = heightFtField.value;
    let heightError = document.getElementById("heightError");

    if (typeof heightFtValue !== "string") {
      heightError.textContent = "Height must be a string";
      badFields = true;
    }
    heightFtValue = heightFtValue.trim();
    if (heightFtValue.length === 0) {
      heightError.textContent = "Must enter your height";
      badFields = true;
    }

    if (isNaN(heightFtValue)) {
      heightError.textContent = "Height (Feet) must be a number";
      badFields = true;
    } else {
      if (heightFtValue % 1 !== 0) {
        heightError.textContent = "Feet must be a whole number";
        badFields = true;
      }
      if (parseInt(heightFtValue) < 2) {
        heightError.textContent = "Feet must be a number between 2 and 8";
        badFields = true;
      }
      if (parseInt(heightFtValue) > 8) {
        heightError.textContent = "Feet must be a number between 2 and 8";
        badFields = true;
      }
    }
  }
  if (heightInField !== null) {
    let heightInValue = heightInField.value;
    let heightError = document.getElementById("heightError");

    if (typeof heightInValue !== "string") {
      heightError.textContent = "Height must be a string";
      badFields = true;
    }

    heightInValue = heightInValue.trim();
    if (heightInValue.length === 0) {
      heightError.textContent = "Must enter your height";
      badFields = true;
    }

    if (isNaN(heightInValue)) {
      heightError.textContent = "Height (Inches) must be a number";
      badFields = true;
    } else {
      if (parseInt(heightInValue) < 0) {
        heightError.textContent = "Inches must be between 0 and 11";
        badFields = true;
      }
      if (parseInt(heightInValue) > 11) {
        heightError.textContent = "Inches must be between 0 and 11";
        badFields = true;
      }
    }
  }

  //// weight
  let weightField = document.getElementById("weightNum");
  if (weightField !== null) {
    let weightValue = weightField.value;
    let weightError = document.getElementById("weightError");

    if (typeof weightValue !== "string") {
      weightError.textContent = "Weight must be a string";
      badFields = true;
    }

    weightValue = weightValue.trim();
    if (weightValue.length === 0) {
      weightError.textContent = "Must enter your weight";
      badFields = true;
    }

    if (isNaN(weightValue)) {
      weightError.textContent = "Weight must be a number";
      badFields = true;
    } else {
      if (parseInt(weightValue) < 50) {
        weightError.textContent = "Weight must be a valid number";
        badFields = true;
      }
      if (parseInt(weightValue) > 1000) {
        weightError.textContent = "Weight must be a valid number";
        badFields = true;
      }
    }
    //sports
    let sportsOption = document.getElementById("sports").value;
    if(sportsOption.length === 0){
      let sportsError = document.getElementById("sportsError");
      sportsError.textContent = "Please select a sport";
      badFields = true;
    }
  }

  ////////////////////
  if (badFields === true) {
    return false;
  } else {
    return true;
  }
}
