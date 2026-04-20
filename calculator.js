// calculator.js

// Function to handle the calculation based on the operator
function calculate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
}

// Function to update the display with the current input or result
function updateDisplay(value) {
    const display = document.getElementById('display');
    display.value = value;
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.value;

    // Get the current display value
    const display = document.getElementById('display');
    let currentValue = display.value;

    // Handle different button actions
    if (buttonValue === 'C') {
        // Clear the display
        updateDisplay('');
    } else if (buttonValue === '=') {
        // Perform the calculation
        try {
            // Evaluate the expression in the display
            const result = eval(currentValue);
            updateDisplay(result);
        } catch (error) {
            updateDisplay('Error');
        }
    } else {
        // Append the button value to the display
        updateDisplay(currentValue + buttonValue);
    }
}

// Add event listeners to all buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
```

### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <div class="buttons">
            <button class="button" value="7">7</button>
            <button class="button" value="8">8</button>
            <button class="button" value="9">9</button>
            <button class="button" value="/">/</button>
            <button class="button" value="4">4</button>
            <button class="button" value="5">5</button>
            <button class="button" value="6">6</button>
            <button class="button" value="*">*</button>
            <button class="button" value="1">1</button>
            <button class="button" value="2">2</button>
            <button class="button" value="3">3</button>
            <button class="button" value="-">-</button>
            <button class="button" value="0">0</button>
            <button class="button" value="C">C</button>
            <button class="button" value="=">=</button>
            <button class="button" value="+">+</button>
        </div>
    </div>
    <script src="calculator.js"></script>
</body>
</html>
```

### CSS (styles.css)
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

.calculator {
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#display {
    width: 100%;
    height: 50px;
    font-size: 24px;
    text-align: right;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    background-color: #444;
    color: #fff;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.button {
    width: 100%;
    height: 50px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color: #555;
    color: #fff;
    cursor: pointer;
}

.button:hover {
    background-color: #666;
}

.button:active {
    background-color: #777;
}
```

### Explanation:
1. **calculator.js**:
   - `calculate`: Performs basic arithmetic operations.
   - `updateDisplay`: Updates the calculator display with the current input or result.
   - `handleButtonClick`: Handles button clicks, updating the display or performing calculations.
   - Event listeners are added to all buttons to trigger `handleButtonClick`.

2. **index.html**:
   - Contains the calculator structure with an input display and buttons for digits and operations.
   - Links to the CSS and JavaScript files.

3. **styles.css**:
   - Provides styling for the calculator, including layout, colors, and hover effects.

This code creates a functional and visually appealing calculator that handles basic arithmetic operations.