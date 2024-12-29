const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');
const celsiusError = document.getElementById('celsiusError');
const fahrenheitError = document.getElementById('fahrenheitError');

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Event listener for Celsius input
celsiusInput.addEventListener('input', () => {
    const celsiusValue = parseFloat(celsiusInput.value);

    // Clear errors
    celsiusError.textContent = '';
    fahrenheitError.textContent = '';

    if (isNaN(celsiusValue) && celsiusInput.value.trim() !== '') {
        celsiusError.textContent = 'Please enter a valid number.';
        fahrenheitInput.value = '-';
    } else if (celsiusInput.value.trim() === '') {
        fahrenheitInput.value = '-';
    } else {
        const fahrenheitValue = celsiusToFahrenheit(celsiusValue).toFixed(2);
        fahrenheitInput.value = fahrenheitValue;
    }
});