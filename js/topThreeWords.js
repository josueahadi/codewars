function topThreeWords(text) {
    // regex to match words and words with apostrophes, but not standalone apostrophes
    let words = text.match(/\b[a-zA-Z']*[a-zA-Z][a-zA-Z']*\b/g);

    if (!words) {
        return [];
    }

    // Convert all words to lowercase
    words = words.map(word => word.toLowerCase());

    // Count occurrences of each word
    let occurrences = {};
    words.forEach(word => {
        if (occurrences[word]) {
            occurrences[word]++;
        } else {
            occurrences[word] = 1;
        }
    });

    // Find the top three words
    let topThree = Object.entries(occurrences)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map((key) => key[0]);

    return topThree;
}

console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`));
