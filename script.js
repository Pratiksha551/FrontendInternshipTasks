document.addEventListener("DOMContentLoaded", function () {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var email_error = document.getElementById('email_error');
    var pass_error = document.getElementById('pass_error');

    // Clear error messages when typing
    email.addEventListener("input", function () {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
    });

    password.addEventListener("input", function () {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
    });

    window.validated = function () {
        var isValid = true;

        if (email.value.length < 9) {
            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
            isValid = false;
        }

        if (password.value.length < 6) {
            password.style.border = "1px solid red";
            pass_error.style.display = "block";
            password.focus();
            isValid = false;
        }

        if (isValid) {
            // Store success message in localStorage
            localStorage.setItem("loginSuccess", "Login Successful! Welcome to the dashboard.");
            window.location.href = "welcome.html";
        }

        return false; // Prevent actual form submission
    };
});
