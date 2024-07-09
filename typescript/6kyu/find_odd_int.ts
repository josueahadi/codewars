export const findOdd = (xs: number[]): number => {
    interface Occurences {
        [key: number]: number;
    }
    const occurences: Occurences = {};
    xs.forEach(num => occurences[num] ? occurences[num]++ : occurences[num] = 1);

    for (const [key, value] of Object.entries(occurences)) {
        if (value % 2 === 1) {
            return Number(key)
        }
    }
    return 0;
};