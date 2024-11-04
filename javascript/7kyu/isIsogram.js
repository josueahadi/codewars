const isIsogram = (str) => {
    str = str.toLowerCase()
    return str.split('').every(letter => str.indexOf(letter) === str.lastIndexOf(letter));
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))