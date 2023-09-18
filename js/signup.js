// Define regular expressions for validation
const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const phoneRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

// Function to validate the username field
function validateUsername() {
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('username-error');

    if (!usernameRegex.test(username)) {
        usernameError.textContent = ' must contain only letters and  numbers';
    } else {
        usernameError.textContent = '';
    }
}

// Function to validate the email field
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');

    if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email address';
    } else {
        emailError.textContent = '';
    }
}

// Function to validate the Phone Number
function validatePhone() {
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phone-error');

    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Invalid phnoe';
    } else {
        phoneError.textContent = '';
    }
}

// Function to validate the password field
function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');

    if (!passwordRegex.test(password)) {
        passwordError.innerHTML =
          "<p> at least 8 characters and contain at least one lowercase , uppercase letter</p> ";
    } else {
        passwordError.textContent = '';
    }
}

// Function to validate the login email field
function validateLoginEmail() {
    const email = document.getElementById('login-email').value;
    const emailError = document.getElementById('login-email-error');

    if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email address';
    } else {
        emailError.textContent = '';
    }
}

// Function to validate the login password field
function validateLoginPassword() {
    const password = document.getElementById('login-password').value;
    const passwordError = document.getElementById('login-password-error');

    if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number';
    } else {
        passwordError.textContent = '';
    }
}

// Function to compare the login password field and repeat password field
function comparePasswords(){
    const password = document.getElementById('login-password').value;
    const repeatPasswordInput = document.getElementById('repeat-password');
    const passwordMatchError = document.getElementById('password-match-error');

    if (password.value != repeatPasswordInput.value) {
        passwordMatchError.textContent = 'Passwords do not match.';
        return false;
    } else {
        passwordMatchError.textContent= '';
        return true;
    }
}

// Add event listeners to the input fields
const usernameField = document.getElementById('username');
usernameField.addEventListener('blur', validateUsername);

const emailField = document.getElementById('email');
emailField.addEventListener('blur', validateEmail);

const phoneField = document.getElementById('phone');
phoneField.addEventListener('blur', validatePhone);

const passwordField = document.getElementById('password');
passwordField.addEventListener('blur', validatePassword);

const loginEmailField = document.getElementById('login-email');
loginEmailField.addEventListener('blur', validateLoginEmail);

const loginPasswordField = document.getElementById('login-password');
loginPasswordField.addEventListener('blur', validateLoginPassword);

const repeatPasswordField = document.getElementById('repeat-password');
repeatPasswordField.addEventListener('blur', comparePasswords);

// Function to validate the signup form
function validateSignupForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;


    if (!usernameRegex.test(username)) {
        alert('Please enter a valid username');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert('Please enter a valid password');
        return false;
    }

    // Save data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('phone', phone)

    alert('Signup successful');
    window.open("index.html");
    return true;
}

// Function to validate the login form
function validateLoginForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email !== localStorage.getItem('email') || password !== localStorage.getItem('password')) {
        alert('Invalid email or password');
        return false;
    }

    alert('Login Successful')
    window.open('index.html')
    return true;
}

// Add event listeners to the forms
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', validateSignupForm);

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', validateLoginForm);

// Displaying password when i press eye icon
const password = document.getElementById("password");
const togglePasswordVisibility = document.getElementById("toggle-password-visibility");
const repeatPassord = document.getElementById("repeat-password");
const toggleRepeatpasswordVisibility = document.getElementById("toggle-repeatpassword-visibility");

togglePasswordVisibility.addEventListener("mouseover", function () {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});
togglePasswordVisibility.addEventListener("mouseup", function () {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

toggleRepeatpasswordVisibility.addEventListener("mouseover", function (){
    if (repeatPassord.type === "password") {
        repeatPassord.type = "text";
    } else {
        repeatPassord.type = "password";
    }
})