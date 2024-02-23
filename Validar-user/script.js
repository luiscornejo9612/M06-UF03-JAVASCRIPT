// 1. Mostrar el input en verde o rojo al salir del campo de usuario
document.getElementById("userInput").addEventListener("focusout", function () {
    var userInput = document.getElementById("userInput");
    var userInputValue = userInput.value.trim();
    var errorMessage = document.getElementById("userError");

    if (userInputValue === "") {
        userInput.style.backgroundColor = "red";
        errorMessage.style.color = "red";
        errorMessage.textContent = "El campo de usuario está vacío.";
    } else {
        userInput.style.backgroundColor = "green";
        errorMessage.textContent = "";
    }
});

// 2. Validar el correo electrónico
document.getElementById("emailInput").addEventListener("focusout", function () {
    var emailInput = document.getElementById("emailInput");
    var emailInputValue = emailInput.value.trim();
    var emailErrorMessage = document.getElementById("emailError");

    if (!validateEmail(emailInputValue)) {
        emailInput.style.backgroundColor = "red";
        emailErrorMessage.style.color = "red";
        emailErrorMessage.textContent = "El correo electrónico no es válido.";
    } else {
        emailInput.style.backgroundColor = "green";
        emailErrorMessage.textContent = "";
    }
});

function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

// 3. Validar la contraseña mientras se escribe
document.getElementById("passwordInput").addEventListener("input", function () {
    var passwordInput = document.getElementById("passwordInput");
    var passwordInputValue = passwordInput.value;
    var passwordErrorMessage = document.getElementById("passwordError");

    var requirements = [
        /[a-z]/, // Letra minúscula
        /[A-Z]/, // Letra mayúscula
        /[0-9]/, // Dígito numérico
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ // Carácter especial
    ];

    var fulfilledRequirements = requirements.filter(function (requirement) {
        return requirement.test(passwordInputValue);
    });

    if (passwordInputValue.length < 8 || passwordInputValue.length > 15 || fulfilledRequirements.length !== 4) {
        passwordInput.style.backgroundColor = "red";
        passwordErrorMessage.style.color = "red";
        var missingRequirements = [];
        if (passwordInputValue.length < 8 || passwordInputValue.length > 15) {
            missingRequirements.push("Debe tener entre 8 y 15 caracteres");
        }
        if (!/[a-z]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos una letra minúscula");
        }
        if (!/[A-Z]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos una letra mayúscula");
        }
        if (!/[0-9]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos un dígito numérico");
        }
        if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos un carácter especial");
        }
        passwordErrorMessage.textContent = "Requisitos insuficientes: " + missingRequirements.join(', ');
    } else {
        passwordInput.style.backgroundColor = "green";
        passwordErrorMessage.textContent = "";
    }
});

// 4. Validar la confirmación de la contraseña
document.getElementById("confirmPasswordInput").addEventListener("focusout", function () {
    var confirmPasswordInput = document.getElementById("confirmPasswordInput");
    var confirmPasswordInputValue = confirmPasswordInput.value;
    var passwordInputValue = document.getElementById("passwordInput").value;
    var confirmPasswordErrorMessage = document.getElementById("confirmPasswordError");

    if (confirmPasswordInputValue !== passwordInputValue) {
        confirmPasswordInput.style.backgroundColor = "red";
        confirmPasswordErrorMessage.style.color = "red";
        confirmPasswordErrorMessage.textContent = "Las contraseñas no coinciden.";
    } else {
        confirmPasswordInput.style.backgroundColor = "green";
        confirmPasswordErrorMessage.textContent = "";
    }
});

// 5. Validar el campo de dirección postal
document.getElementById("addressInput").addEventListener("focusout", function () {
    var addressInput = document.getElementById("addressInput");
    var addressInputValue = addressInput.value.trim();
    var addressErrorMessage = document.getElementById("addressError");

    if (addressInputValue === "") {
        addressInput.style.backgroundColor = "red";
        addressErrorMessage.style.color = "red";
        addressErrorMessage.textContent = "El campo de dirección postal está vacío.";
    } else {
        addressInput.style.backgroundColor = "green";
        addressErrorMessage.textContent = "";
    }
});

// Validar el envío del formulario
function validateForm() {
    var userInput = document.getElementById("userInput");
    var emailInput = document.getElementById("emailInput");
    var passwordInput = document.getElementById("passwordInput");
    var confirmPasswordInput = document.getElementById("confirmPasswordInput");
    var addressInput = document.getElementById("addressInput");

    var userInputValue = userInput.value.trim();
    var emailInputValue = emailInput.value.trim();
    var passwordInputValue = passwordInput.value;
    var confirmPasswordInputValue = confirmPasswordInput.value;
    var addressInputValue = addressInput.value.trim();

    var userInputErrorMessage = document.getElementById("userError");
    var emailErrorMessage = document.getElementById("emailError");
    var passwordErrorMessage = document.getElementById("passwordError");
    var confirmPasswordErrorMessage = document.getElementById("confirmPasswordError");
    var addressErrorMessage = document.getElementById("addressError");

    // Validar cada campo individualmente
    if (userInputValue === "") {
        userInput.style.backgroundColor = "red";
        userInputErrorMessage.style.color = "red";
        userInputErrorMessage.textContent = "El campo de usuario está vacío.";
        return false;
    }

    if (!validateEmail(emailInputValue)) {
        emailInput.style.backgroundColor = "red";
        emailErrorMessage.style.color = "red";
        emailErrorMessage.textContent = "El correo electrónico no es válido.";
        return false;
    }

    var requirements = [
        /[a-z]/, // Letra minúscula
        /[A-Z]/, // Letra mayúscula
        /[0-9]/, // Dígito numérico
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ // Carácter especial
    ];

    var fulfilledRequirements = requirements.filter(function (requirement) {
        return requirement.test(passwordInputValue);
    });

    if (passwordInputValue.length < 8 || passwordInputValue.length > 15 || fulfilledRequirements.length !== 4) {
        passwordInput.style.backgroundColor = "red";
        passwordErrorMessage.style.color = "red";
        var missingRequirements = [];
        if (passwordInputValue.length < 8 || passwordInputValue.length > 15) {
            missingRequirements.push("Debe tener entre 8 y 15 caracteres.");
        }
        if (!/[a-z]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos una letra minúscula.");
        }
        if (!/[A-Z]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos una letra mayúscula.");
        }
        if (!/[0-9]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos un dígito numérico.");
        }
        if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos un carácter especial.");
        }
        passwordErrorMessage.textContent = "Requisitos insuficientes: " + missingRequirements.join(", ");
        return false;
    }

    if (confirmPasswordInputValue !== passwordInputValue) {
        confirmPasswordInput.style.backgroundColor = "red";
        confirmPasswordErrorMessage.style.color = "red";
        confirmPasswordErrorMessage.textContent = "Las contraseñas no coinciden.";
        return false;
    }

    if (addressInputValue === "") {
        addressInput.style.backgroundColor = "red";
        addressErrorMessage.style.color = "red";
        addressErrorMessage.textContent = "El campo de dirección postal está vacío.";
        return false;
    }

    return true;
}
