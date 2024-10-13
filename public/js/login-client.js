document.addEventListener("DOMContentLoaded", function () {
  /// connect to submit
  let signinFormElement = document.getElementById("signin-form");
  if (signinFormElement !== null) {
    signinFormElement.addEventListener("submit", (event) => {
      let formData = new FormData(signinFormElement);
      let username = formData.get("username").trim();
      let password = formData.get("password").trim();
      if (username.length <= 0 || password.length <= 0) {
        $(".loginError").text("Username or Password is invalid");
      }
      try {
        $.ajax({
          type: "POST",
          url: "/login",
          dataType: "json",
          data: {
            username: username,
            password: password,
          },
        })
          .done(function (repsone) {
            console.log("Login successful");
            window.location.href("/home");
          })
          .fail(function (xhr, status, errorThrown) {
            /* console.log("Error: " + errorThrown);
            console.log("Status: " + status); */
            let errorMessage;
            if (xhr.responseJSON && xhr.responseJSON.message) {
              errorMessage = xhr.responseJSON.message;
            } else {
              errorMessage =
                "An error occured when trying to login. Please try again";
            }
            $(".loginError").text(errorMessage);
          });
      } catch (e) {
        console.error("Error during login: ", e);
      }
    });
  }

  const inputFields = document.querySelectorAll("input");
  inputFields.forEach((inputField) => {
    inputField.addEventListener("input", clearError);
  });
});

function clearError(event) {
  const fieldName = event.target.id;
  let errorElement = document.getElementById(`${fieldName}Error`);

  if (errorElement) {
    console.log(errorElement);
    errorElement.textContent = "";
  }
}
