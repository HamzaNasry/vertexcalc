// Function to calculate vertex of quadratic equation
function calculateVertex() {
    console.log('Calculating...'); // Check if the function is being executed
    const input = document.getElementById('quadraticInput').value.trim();
    const result = document.getElementById('result');
    const button = document.getElementById('calculateButton'); // Update button id

    // Clear previous result or error message
    result.textContent = '';

    // Regular expression to match common forms of quadratic equations
    const regex = /([+-]?\d*\.?\d*)?x\^2\s*([+-]\s*\d*\.?\d*)?x\s*([+-]\s*\d*\.?\d*)?/;
    const matches = input.match(regex);

    if (!matches) {
        result.textContent = 'Please enter a valid quadratic equation in the form ax^2 + bx + c.';
        return;
    }

    // Change button text to "Calculating..."
    button.textContent = 'Calculating...';

    // Extracting coefficients, handling default values for a, b, and c
    const a = matches[1] ? parseFloat(matches[1].replace(/\+/g, '') || 1) : 1;
    const b = matches[2] ? parseFloat(matches[2].replace(/\s+/g, '').replace(/\+/g, '') || (matches[2].includes('x') ? 1 : 0)) : 0;
    const c = matches[3] ? parseFloat(matches[3].replace(/\s+/g, '').replace(/\+/g, '')) : 0;

    // Calculate the vertex (h, k)
    const h = -b / (2 * a);
    const k = a * h ** 2 + b * h + c;

    result.textContent = `The vertex of the quadratic function is: (${h.toFixed(2)}, ${k.toFixed(2)})`;

    // Revert button text after a short delay
    setTimeout(function() {
        button.textContent = 'Calculate';
    }, 2000);
}

// Add an event listener to the input field to clear the error message when the user starts typing
document.getElementById('quadraticInput').addEventListener('input', function() {
    document.getElementById('result').textContent = '';
});

// Event listener for the button
document.getElementById('calculateButton').addEventListener('click', function(event) {
    console.log('Button clicked'); // Check if the button click event is triggered
    event.preventDefault(); // Prevent default form submission behavior
    calculateVertex();
});
