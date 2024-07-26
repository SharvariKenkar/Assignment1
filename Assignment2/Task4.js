function sumOfProducts(n1, n2) {
    n1 = n1.toString().split('').reverse();
    n2 = n2.toString().split('').reverse();
    let sum = 0;

    for (let i = 0; i < n1.length; i++) {
        sum += (parseInt(n1[i]) || 0) * (parseInt(n2[i]) || 0);
    }

    return sum;
}


console.log(sumOfProducts(6, 34)); 
console.log(sumOfProducts(123, 456)); 
console.log(sumOfProducts(123, 4)); 
