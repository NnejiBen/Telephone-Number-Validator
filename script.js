document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    if (userInput === '') {
        alert('Please provide a phone number');
        return;
    }

    const phonePattern = /^(1\s?)?(\d{3}|\(\d{3}\))[-\s.]?\d{3}[-\s.]?\d{4}$/;
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';

    if (phonePattern.test(userInput)) {
        resultItem.textContent = `Valid US number: ${userInput}`;
    } else {
        resultItem.textContent = `Invalid US number: ${userInput}`;
    }

    resultsDiv.appendChild(resultItem);
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').innerHTML = '';
});