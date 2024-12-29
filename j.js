const form = document.getElementById('validatedForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');

const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Real-time validation
fullName.addEventListener('input', () => {
    if (fullName.value.trim().length < 3) {
        fullNameError.textContent = 'Full name must be at least 3 characters long.';
    } else {
        fullNameError.textContent = '';
    }
});

email.addEventListener('input', () => {
    if (!email.validity.valid) {
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
});

password.addEventListener('input', () => {
    if (password.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
    } else {
        passwordError.textContent = '';
    }
});

// Form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Final validation check
    let isValid = true;

    if (fullName.value.trim().length < 3) {
        fullNameError.textContent = 'Full name must be at least 3 characters long.';
        isValid = false;
    }
    if (!email.validity.valid) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }
    if (password.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    if (!isValid) return;

    // Confirmation popup
    const userConfirmed = confirm("Are you sure you want to submit the form?");
    if (userConfirmed) {
        alert("Form submitted successfully!");
        form.reset(); // Clear the form after submission
    } else {
        alert("Form submission canceled.");
    }
});