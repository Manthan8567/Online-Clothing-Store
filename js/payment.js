function validateForm() {
    var cardName = document.getElementById("cardName").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;

    var cardNameError = document.getElementById("cardNameError");
    var cardNumberError = document.getElementById("cardNumberError");
    var expiryDateError = document.getElementById("expiryDateError");
    var cvvError = document.getElementById("cvvError");

    // Reset error messages and styles
    resetError(cardNameError);
    resetError(cardNumberError);
    resetError(expiryDateError);
    resetError(cvvError);

    // Perform validation
    if (!cardName.trim()) {
        displayError(cardNameError, "Name on Card is required");
        return false;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
        displayError(cardNumberError, "Valid 16-digit Card Number is required");
        return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        displayError(expiryDateError, "Valid Expiry Date (MM/YY) is required");
        return false;
    }

    if (!/^\d{3}$/.test(cvv)) {
        displayError(cvvError, "Valid 3-digit CVV is required");
        return false;
    }
    // If all validations pass
    alert("Thank you for shopping !");

    return true;

    function displayError(element, message) {
        element.textContent = message;
        element.style.color = "red";
    }
    
    function resetError(element) {
        element.textContent = "";
        element.style.color = "";
    }

    
}

// Limit the card number 16 digits
document.getElementById("cardNumber").addEventListener("input", function (event) {
    var input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    event.target.value = input.substring(0, 16); // Limit to 16 digits
});

// expiry date format(slash after 2 digits)
document.getElementById("expiryDate").addEventListener("input", function (event) {
    var input = event.target.value.replace(/\D/g, "");
    var formattedInput = input.replace(/(\d{2})/, "$1/").trim();
    
    if (formattedInput.length > 5) {
        formattedInput = formattedInput.substring(0, 5);
    }
    event.target.value = formattedInput;
});
