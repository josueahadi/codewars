function sumConsecutives(s) {
    const result = [];
    let accumulator = s[0];
    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i - 1]) {
            accumulator += s[i];
        } else {
            result.push(accumulator)
            accumulator = s[i]
        }
    }
    return result
}