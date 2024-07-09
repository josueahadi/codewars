/*
I. ENCODE

My Algorithm: 
1. Convert the input string str to an array "message".
2. Store letters and their unique numbers as an object "alphabetMapping".
3. Loop through the "message" array and map letters to their corresponding numbers from the "alphabetMapping".
4. Create a "key" array from the digits of the provided number "n".
5. Repeat the elements of the "key" array until its length matches the length of the "message" array --> store the extended key as an array
6. Add the "extended key" array and the "message" array together by adding each corresponding element.
7. Return the encoded message.
-----
*/

const alphabetMapping = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
    'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19,
    't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
};

function encode(str,  n) {
  let message = str.split('');
  key = Array.from(String(n), ((n) => Number(n)))
  let extendedKey = [];
  let messageAsInt = [];
  
  for (let i=0; i<message.length; i++) {
    messageAsInt.push(alphabetMapping[message[i]]);
  }
  
  while(extendedKey.length < message.length) {
    for (let i = 0; i < key.length && extendedKey.length < message.length; i++) {
      extendedKey.push(key[i])
    }
    
  }
  
  console.log(extendedKey);
  
  let encodedMessage = messageAsInt.map((element, index) => element+extendedKey[index]);
  
  return encodedMessage;
  
}

encode("innerpeace", 1939)