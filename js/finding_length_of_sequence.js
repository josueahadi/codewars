var lengthOfSequence = function (arr, n) {
    const occurences = {}
    for (let num of arr) {
        if (occurences[num]) {
            occurences[num] += 1;
        } else {
            occurences[num] = 1;
        }
    }

    if (occurences[n] !== 2) {
        return 0
    }

    const subArr = arr.slice(arr.indexOf(n), arr.lastIndexOf(n) + 1)
    return subArr.length;
};

lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9]); // 5