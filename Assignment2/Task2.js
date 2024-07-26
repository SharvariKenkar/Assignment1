function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b !== 0) {
                return a / b;
            } else {
                return 'Error: Division by zero';
            }
        default:
            return 'Error: Invalid operation';
    }
}



console.log(calculate(10, 5, 'add'));        
console.log(calculate(10, 5, 'subtract'));   
console.log(calculate(10, 5, 'multiply'));   
console.log(calculate(10, 5, 'divide')); 