function decode(str) {
    if (typeof str !== 'string') {
        return 'Input is not a string';
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const reversedAlphabet = alphabet.split('').reverse().join('');

    return str.split('').map(char => {
        const lowerChar = char.toLowerCase();
        const indexInReversedAlphabet = reversedAlphabet.indexOf(lowerChar);

        if (indexInReversedAlphabet !== -1) {
            const decodedChar = alphabet[indexInReversedAlphabet];
            return char === lowerChar ? decodedChar : decodedChar.toUpperCase();
        } else {
            return char;
        }
    }).join('');
}

console.log(decode('yvvi')); // Expected output: 'beer'
console.log(decode('Blf zoivzwb szw 10 yvvih')); // Expected output: 'You already had 10 beers'
console.log(decode(`Ovg'h hdrn rm gsv ulfmgzrm!`)); // Expected output: 'Let's swim in the fountain!'
console.log(decode(`Tl slnv, blf'iv wifmp`)); // Expected output: 'Go home, you're drunk'