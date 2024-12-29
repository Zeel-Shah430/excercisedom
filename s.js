const birthYearInput = document.getElementById('birthYear');
const errorMessage = document.getElementById('errorMessage');
const ageDisplay = document.getElementById('ageDisplay');

// Get the current year
const currentYear = new Date().getFullYear();

// Event listener for input field
birthYearInput.addEventListener('input', () => {
    const birthYear = parseInt(birthYearInput.value, 10);

    // Clear previous messages
    errorMessage.textContent = '';
    ageDisplay.textContent = '';

    if (isNaN(birthYear)) {
        errorMessage.textContent = 'Please enter a valid number.';
        return;
    }

    if (birthYear > currentYear) {
        errorMessage.textContent = 'Invalid year. Birth year cannot be in the future.';
    } else if (birthYear < 1900) {
        errorMessage.textContent = 'Invalid year. Please enter a realistic birth year.';
    } else {
        const age = currentYear - birthYear;
        ageDisplay.textContent = `You are ${age} years old.`;
    }
});