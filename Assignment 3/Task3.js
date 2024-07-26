let string = 'INDIA';
string = string.split('');
string.splice(0, 5, 'I', 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A');
let newString = string.join('');
console.log(newString);
