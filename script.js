function validateForm() {

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("bdayError").innerHTML = "";
    document.getElementById("sexError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("unameError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("pass2Error").innerHTML = "";
    document.getElementById("activityError").innerHTML = "";
    document.getElementById("helpError").innerHTML = "";
    document.getElementById("supportError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    // Sets the base vaLue of the form's validity as true
    let isValid = true;

    // Checks if inputted full name is valid
    let name = document.getElementById("fullname").value;
    if (name == "") {
        document.getElementById("nameError").innerHTML = "Enter your name";
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById("nameError").innerHTML = "Must be at least 2 characters.";
        isValid = false;
    }

    // Checks if inputted birthdate is valid
    let birth = document.getElementById("birthdate").value;
    if (birth == "") {
        document.getElementById("bdayError").innerHTML = "Required";
        isValid = false;
    } else {
        let birthYear = new Date(birth).getFullYear();
        let currentYear = new Date().getFullYear();

        if (currentYear - birthYear < 13) {
            document.getElementById("bdayError").innerHTML = "Must be at least 13 years old";
            isValid = false;
        }
    }

    // Checks if selected sex is valid
    let sex = document.getElementsByName("sex");
    let selected = false;
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            selected = true;
        }
    }
    if (!selected) {
        document.getElementById("sexError").innerHTML = "Required";
        isValid = false;
    }

    // Checks if inputted email is valid
    let email = document.getElementById("email").value;
    if (email == "" || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        isValid = false;
    }

    // Checks if inputted username is valid
    let username = document.getElementById("username").value;
    if (username.length < 8 || username.length > 20) {
        document.getElementById("unameError").innerHTML = "Must have 8-20 characters.";
        isValid = false;
    }

    // Checks if inputted password is valid
    let password = document.getElementById("password").value;
    if (password.length < 10) {
        document.getElementById("passError").innerHTML = "Must be at least 10 characters";
        isValid = false;
    }

    // Checks if re-entered password is the same as the previous password
    let confirm = document.getElementById("confirm").value;
    if (confirm != password) {
        document.getElementById("pass2Error").innerHTML = "Password does not match.";
        isValid = false;
    }

    // Checks if selected activities is valid
    let activity = document.getElementsByName("activity");
    let activityCheck = false;
    for (let i = 0; i < activity.length; i++) {
        if (activity[i].checked) {
            activityCheck = true;
        }
    }
    if (!activityCheck) {
        document.getElementById("activityError").innerHTML = "Required";
        isValid = false;
    }

    // Checks if selected way of helping is valid
    let help = document.getElementsByName("help");
    let helpCheck = false;
    for (let i = 0; i < help.length; i++) {
        if (help[i].checked) {
            helpCheck = true;
        }
    }
    if (!helpCheck) {
        document.getElementById("helpError").innerHTML = "Required";
        isValid = false;
    }

    // Checks if selected support type is valid
    let support = document.getElementsByName("support");
    let supportCheck = false;
    for (let i = 0; i < support.length; i++) {
        if (support[i].checked) {
            supportCheck = true;
        }
    }
    if (!supportCheck) {
        document.getElementById("supportError").innerHTML = "Required";
        isValid = false;
    }

    // Checks to see if the value of isValid is true or false, and returns respective message.
    if (isValid) {
        document.getElementById("successMessage").innerHTML =
            "Welcome to SEAA !! Thank you for being part of saving marine life !!!!";
    }

    return isValid;
}