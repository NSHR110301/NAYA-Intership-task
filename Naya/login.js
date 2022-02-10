const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login");
const loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "pwd") {
        // If the credentials are valid, show an alert box and reload the page
        alert("You have successfully logged in.");
       window.location.replace("index.html");
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})