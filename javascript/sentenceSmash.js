/* 
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 

Example: 
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/ 

function smash (words) {
    return words.join(" ");
 };

console.log(smash(["hello", "world"]));