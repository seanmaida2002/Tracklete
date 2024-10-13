(function ($) {
    let signUpFormElement = document.getElementById("signup-form");
    if (signUpFormElement !== null) {
        signUpFormElement.addEventListener("submit", (event) => {
            if (!isFormValid(event)) {
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
            $.ajax({
                type: "POST",
                url: "/register",
                dataType: "json",
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword,
                    email: email,
                    age: age,
                    gender: gender,
                    heightFt: heightFt,
                    heightIn: heightIn,
                    weightNum: weightNum,
                    weightUnit: weightUnit,
                    sports: sports,
                    healthInformation: healthInformation
                },
            })
                .done(function (repsone) {
                    console.log("Registration successful");
                    window.location.replace("/login");
                })
                .fail(function (xhr, status, errorThrown) {
                    console.log("Error: " + errorThrown);
                    console.log("Status: " + status);
                    let errorMessage;
                    if (xhr.responseJSON && xhr.responseJSON.message) {
                        errorMessage = xhr.responseJSON.message;
                    } else {
                        errorMessage =
                            "An error occured when trying to register. Please try again";
                    }
                    $(".registerError").text(errorMessage);
                });
        })
    }
})
