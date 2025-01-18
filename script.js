const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic hardcoded authentication for demonstration
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        errorMessage.classList.add("hidden");
    } else {
        errorMessage.classList.remove("hidden");
    }
});
