// Select inputs and button
const userName = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Regex patterns
const userPattern = /^[A-Za-z0-9]{3,}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^[A-Za-z0-9]{8,}$/;
// Username validation
userName.addEventListener("input", () => {
    userName.style.border = userPattern.test(userName.value)
        ? "2px solid blue"
        : "2px solid red";
});
// Email validation
emailInput.addEventListener("input", () => {
    emailInput.style.border = emailPattern.test(emailInput.value)
        ? "2px solid blue"
        : "2px solid red";
});


passwordInput.addEventListener("input", () => {
    passwordInput.style.border = passwordPattern.test(passwordInput.value)
        ? "2px solid blue"
        : "2px solid red";
});

// Confirm Password validation
confirmPasswordInput.addEventListener("input", () => {
    confirmPasswordInput.style.border =
        confirmPasswordInput.value === passwordInput.value
            ? "2px solid blue"
            : "2px solid red";
});

// function submit
function handleSubmit(event) {
    event.preventDefault();
    // get email from local storage if it exists
    const existingEmail = localStorage.getItem("email");

    if (
        // Validate credentials
        userPattern.test(userName.value) &&
        emailPattern.test(emailInput.value) &&
        passwordPattern.test(passwordInput.value) &&
        confirmPasswordInput.value === passwordInput.value
    ) {
        // check if email already exists in local storage
        if (existingEmail === emailInput.value) {
            alert("Email already exists. Please use a different email.");
        } else {
            // Save data to localStorage
            localStorage.setItem("username", userName.value);
            localStorage.setItem("email", emailInput.value);
            localStorage.setItem("password", passwordInput.value);
            // Redirect to Login page
            window.location.href = "./src/Login/Login.html";
        }
    } else {
        alert("Please fill all fields correctly.");
    }
}