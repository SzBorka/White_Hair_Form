document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const successMessage = document.getElementById("success-message");
    const emailInput = form.querySelector("#email");
    const confirmEmailInput = form.querySelector("#confirm-email");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("#name").value;
        const email = emailInput.value;
        const confirmEmail = confirmEmailInput.value;
        const acceptTerms = form.querySelector("#accept-terms").checked;

        let errorText = "";

        if (!name || !email || !confirmEmail || !acceptTerms) {
            errorText += "Kérjük, töltse ki az összes kötelező mezőt!\n";
        }

        if (email !== confirmEmail) {
            errorText += "Az email címek nem egyeznek!\n";
            setCustomValidityAndClass(emailInput, confirmEmailInput, "Az email címek nem egyeznek!");
        } else {
            resetCustomValidityAndClass(emailInput, confirmEmailInput);
        }

        successMessage.style.display = errorText ? "none" : "block";
    });

    confirmEmailInput.addEventListener("input", function () {
        const email = emailInput.value;
        const confirmEmail = confirmEmailInput.value;

        if (email !== confirmEmail) {
            setCustomValidityAndClass(emailInput, confirmEmailInput, "Az email címek nem egyeznek!");
        } else {
            resetCustomValidityAndClass(emailInput, confirmEmailInput);
        }
    });

    function setCustomValidityAndClass(input1, input2, message) {
        input1.setCustomValidity(message);
        input2.setCustomValidity(message);

        input1.classList.add("invalid-input");
        input2.classList.add("invalid-input");
    }

    function resetCustomValidityAndClass(input1, input2) {
        input1.setCustomValidity("");
        input2.setCustomValidity("");

        input1.classList.remove("invalid-input");
        input2.classList.remove("invalid-input");
    }
});
