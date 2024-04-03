
function validateWord(s)
{
  let word = s.toLowerCase();
  // object to keep track of the number of occurrences of each character in the word...
  const charCounts = {};
  
  // this loop iterates over each character in the word
  for (const char of word) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  // get the number of occurrences of the first character in the word
  firstCharCount = charCounts[word[0]];
  
  for (const count of Object.values(charCounts)) {
    if (count !== firstCharCount) {
      return false;
    }
  }
   return true
}
validateWord("abc");