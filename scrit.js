const feedbackInput = document.getElementById('feedback');
const charCounter = document.getElementById('charCounter');
const maxChars = 200;

// Update the character counter
feedbackInput.addEventListener('input', () => {
    const currentLength = feedbackInput.value.length;

    // Update the counter text
    charCounter.textContent = `${currentLength}/${maxChars} characters`;

    // Add a warning class if the max limit is reached
    if (currentLength >= maxChars) {
        charCounter.classList.add('warning');
    } else {
        charCounter.classList.remove('warning');
    }
});
Explanation 