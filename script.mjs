document.getElementById('convertButton').addEventListener('click', () => {
    const yardsInput = parseFloat(document.getElementById('yardsInput').value);
    if (!isNaN(yardsInput)) {
        const squareFeet = yardsToSquareFeet(yardsInput);
        document.getElementById('result').textContent = `${yardsInput} yards is equal to ${squareFeet} square feet.`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid number of yards.';
    }
});

function yardsToSquareFeet(yards) {
    return Math.pow(yards * 3, 2);
}
