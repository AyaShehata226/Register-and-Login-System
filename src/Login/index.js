const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
function handleSubmit(event) {
    event.preventDefault();

    // Retreive stored values from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (!storedEmail || !storedPassword) {
        alert("No account found. Please register first.");
        return;
    }
    // Validate credentials
    if (
        emailInput.value.trim() === storedEmail &&
        passwordInput.value.trim() === storedPassword
    ) {
        alert("Login successful!");
        window.location.href = "../../index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}