function getMinAvgMax(toDiscard, data) {
    let withoutDiscarded = [];
    let result = [];

    // Discard 'toDiscard' elements from both ends of each sub-array
    data.forEach((arr) => {
        withoutDiscarded.push(arr.slice(toDiscard, -toDiscard));
    });

    // Calculate min, avg, max for each sub-array
    for (let subArr of withoutDiscarded) {
        const min = Math.min(...subArr);
        const max = Math.max(...subArr);
        const avg = subArr.reduce((sum, num) => sum + num, 0) / subArr.length;
        result.push([min, avg, max]);
    }

    // Flatten the array to calculate total min, avg, max
    const joinedArr = withoutDiscarded.flat();
    const totalMin = Math.min(...joinedArr);
    const totalMax = Math.max(...joinedArr);
    const totalAvg = joinedArr.reduce((sum, num) => sum + num, 0) / joinedArr.length;
    
    // Add overall min, avg, max to result
    result.push([totalMin, totalAvg, totalMax]);
    return result;
}

console.log(getMinAvgMax(2, [[800, 1200, 2100, 4100, 1300, 700], [1000, 1500, 4500, 5000, 5800, 2000, 1500]]));
// Expected output: [[2100, 3100, 4100], [4500, 5100, 5800], [2100, 4300, 5800]]