const form = document.getElementById('validationForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

// Real-time validation for username
usernameInput.addEventListener('input', () => {
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username cannot be empty.';
    } else {
        usernameError.textContent = '';
    }
});

// Real-time validation for password
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
    } else {
        passwordError.textContent = '';
    }
});

// Form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const isUsernameValid = usernameInput.value.trim() !== '';
    const isPasswordValid = passwordInput.value.length >= 6;

    if (isUsernameValid && isPasswordValid) {
        alert('Form submitted successfully!');
        // Optionally, you can proceed with form submission here
        // form.submit();
    } else {
        if (!isUsernameValid) {
            usernameError.textContent = 'Username cannot be empty.';
        }
        if (!isPasswordValid) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
        }
    }
});