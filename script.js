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
let isvalid = true;
let meassages = [];

    if (name === "") {
        isvalid = false;
        meassages.push("Name is required.");
    }
    if (email === "") {
        isvalid = false;
        meassages.push("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        isvalid = false;
        meassages.push("Email format is invalid.");
    }
    if (password === "") {
        isvalid = false;
        meassages.push("Password is required.");
    } else if (password.length < 6) {
        isvalid = false;
        meassages.push("Password must be at least 6 characters long.");
    }
    
    if (!isvalid) {
        feedbackDiv.style.display = "block";
        feedbackDiv.textContent = meassages.join(" ");
    } else {
        feedbackDiv.style.display = "none"; // Hide feedback if valid
    }

});