/*
Write a function that accepts an array of integers "code" and a "key" number. 
As the result, it should return string containg a decoded message from the "code".
Example
decode([ 20, 12, 18, 30, 21],1939);  ==> "scout"
decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],1939);  ==>  "masterpiece"
*/

const alphabetMapping = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
    'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19,
    't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
};

function decode  (code, n) {
    let key = Array.from(String(n), ((n) => Number(n)))
    let integerMessage = [];
    let extendedKey = [];
    let decodedMessage = [];
    
    while (extendedKey.length < code.length) {
        for (let i = 0; i < key.length && extendedKey.length < code.length; i++) {
            extendedKey.push(key[i]);
        }
    }
    integerMessage = code.map((element, index) => element-extendedKey[index])
      

    for (let i=0; i<integerMessage.length; i++) {
        for (let key in alphabetMapping) {
            if (alphabetMapping[key] === integerMessage[i]) {
                decodedMessage.push(key);
            }
        }
    }
    return decodedMessage.join("");
}

console.log(decode([ 20, 12, 18, 30, 21],1939));