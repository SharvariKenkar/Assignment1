function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}

let sentence = 'This is a wring sentence with a wring word';
console.log(correctfn(sentence, 'wring', 'wrong'));
