function countWords(paragraph) {
    return paragraph.split(/\s+/).length;
}

const paragraph = 'This is a sample paragraph with several words to count for the program javascript.';
console.log(countWords(paragraph));
