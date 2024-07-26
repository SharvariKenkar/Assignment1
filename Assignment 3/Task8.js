function repeatedDigitSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    return num;
}

console.log(repeatedDigitSum(456));
