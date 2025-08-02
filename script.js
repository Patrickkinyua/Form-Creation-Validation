document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        feedbackDiv.style.display = "block"; // Show the feedback div
        feedbackDiv.textContent = "Registration successful!"; // Set feedback message
    });
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
let isValid = true;
let messages = [];

    if (name === "") {
        isValid = false;
        messages.push("Name is required.");
    }
    if (email === "") {
        isValid = false;
        messages.push("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        messages.push("Email format is invalid.");
    }
    if (password === "") {
        isValid = false;
        messages.push("Password is required.");
    } else if (password.length < 6) {
        isValid = false;
        messages.push("Password must be at least 6 characters long.");
    }

    if (!isValid) {
        feedbackDiv.style.display = "block";
        feedbackDiv.textContent = messages.join(" ");
    } else {
        feedbackDiv.style.display = "none"; // Hide feedback if valid
    }

});