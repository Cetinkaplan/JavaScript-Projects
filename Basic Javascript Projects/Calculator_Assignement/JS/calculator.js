// Creates an object to keep track of values
const calculator = {
    display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

// This modifies values each time a button is clicked
function Input_Digit(digit) {
    const { display_Value, Wait_Second_Operand } = calculator;
    // Checks if the Wait_Second_Operand variable is true and sets
    // display_Value to the key that was clicked on.
    if (Wait_Second_Operand === true) {
        calculator.display_Value = digit;
        calculator.Wait_Second_Operand = false;
    } else {
        // This overwrites display_Value if the current value is 0, otherwise
        // it concatenates the value.
        calculator.display_Value = display_Value === '0' ? digit : display_Value + digit;
    }
}

// This section handles decimal points
function Input_Decimal(dot) {
    if (calculator.Wait_Second_Operand === true) return;
    if (!calculator.display_Value.includes(dot)) {
        calculator.display_Value += dot;
    }
}

// This section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, display_Value, operator } = calculator;
    const Value_of_Input = parseFloat(display_Value);
    // Checks if an operator exists and if Wait_Second_Operand is true
    // Then updates the operator and exits the function
    if (operator && calculator.Wait_Second_Operand) {
        calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9);
        // This will remove any trailing 0s
        result = (result * 1).toString();
        calculator.display_Value = result;
        calculator.First_Operand = result;
    }
    calculator.Wait_Second_Operand = true;
    calculator.operator = Next_Operator;
}

// Handles the actual calculation
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

// Resets the calculator when the AC button is clicked
function Calculator_Reset() {
    calculator.display_Value = '0';
    calculator.First_Operand = null;
    calculator.Wait_Second_Operand = false;
    calculator.operator = null;
}