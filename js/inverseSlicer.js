function inverseSlice(items, a, b) {
    return [...items.slice(0, a), ...items.slice(b)]
}

inverseSlice([12, 14, 63, 72, 55, 24], 2, 4)