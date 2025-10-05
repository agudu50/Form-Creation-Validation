

        document.addEventListener("DOMContentLoaded", function() {

                document.getElementById("registration-form").addEventListener("submit", function(event) {

        // Storing form and feedback div references
        const form = document.getElementById("registration-form");
        const feedbackDiv = document.getElementById("form-feedback");
  let isValid = true;
  const messages = [];

  // Get form elements
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get error spans
  const emailError = document.getElementById("emailError");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  // Clear previous errors
  emailError.textContent = "";
  usernameError.textContent = "";
  passwordError.textContent = "";

  // Username validation
  if (username.length < 3 || username.length > 20) {
    usernameError.textContent = "Username must be between 3 and 20 characters long.";
    messages.push("Username must be between 3 and 20 characters long.");
    isValid = false;
  }

  // Email validation
  if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Please enter a valid email address.";
    messages.push("Please enter a valid email address.");
    isValid = false;
  }

  // Password validation
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    messages.push("Password must be at least 8 characters long.");
    isValid = false;
  }



// Display feedback

  feedbackDiv.style.display = "block";

if (isValid) {
  feedbackDiv.textContent = "Registration successful!";
  feedbackDiv.style.color = "#28a745";
} else {
  feedbackDiv.innerHTML = messages.join("<br>");
  feedbackDiv.style.color = "#dc3545";
}




  // Stop submission if invalid
  if (!isValid) {
    event.preventDefault();
  }
});
});

  
   