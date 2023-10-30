// Function to convert Yards to Square Feet
function convertToSquareFeet(yards) {
    // 1 Yard = 9 Square Feet (Standard Conversion)
    return yards * 9;
}

// Function to handle form submission
document.getElementById('areaConverterForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the value from the Yards input
    const yardsValue = parseFloat(document.getElementById('yards').value);

    // Check if the input is a valid number
    if (!isNaN(yardsValue)) {
        // Perform the conversion
        const squareFeetValue = convertToSquareFeet(yardsValue);

        // Display the result with two decimal places
        document.getElementById('result').innerHTML = `${yardsValue} Yards is equal to ${squareFeetValue.toFixed(2)} Square Feet.`;
    } else {
        // Display an error message if the input is not a valid number
        document.getElementById('result').innerHTML = 'Please enter a valid number for Yards.';
    }
});
