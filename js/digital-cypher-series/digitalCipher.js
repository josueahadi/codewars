

const alphabetMapping = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
    'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19,
    't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
};

function encode(str,  n) {
    let arr = str.split('');
    key = Array.from(String(n), ((n) => Number(n)))
    console.log(key);
    console.log(arr)
    let encodedArr = [];
    
    for (i=0; i<arr.length; i++) {
      encodedArr.push(alphabetMapping[arr[i]]);
    }
    console.log(encodedArr);
  }



encode("scout", 1939)