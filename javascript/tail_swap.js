function tailSwap(arr) {
    const [a, b] = arr;
    const [a1, a2] = a.split(':')
    const [b1, b2] = b.split(':')
    const swappedValues = [`${a1}:${b2}`, `${b1}:${a2}`]
    return swappedValues;
}

tailSwap(["abc:123", "cde:456"]);
tailSwap(["a:12345", "777:xyz"]);