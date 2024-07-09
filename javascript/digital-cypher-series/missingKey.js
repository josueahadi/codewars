/*
III. MISSING KEY

*/

const alphabetMapping = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
    'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19,
    't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
};

function findTheKey(message, code)
{
    let messageAsInt = [];
    extendedKey = [];
    possibleKeys = [];
    key = [];

    for (let i = 0; i<message.length; i++) {
        messageAsInt.push(alphabetMapping[message[i]]);
    }
    console.log(messageAsInt);
    for (let i = 0; i < messageAsInt.length; i++) {
        if (messageAsInt[i] < code[i]) {
            extendedKey.push(code[i] - messageAsInt[i]);
        }
        else {
            extendedKey.push(messageAsInt[i] - code[i]);
        }
    }
    console.log(extendedKey);
}

findTheKey("nomoretears", [15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20]);