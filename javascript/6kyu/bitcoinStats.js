function getMinAvgMax(toDiscard, data) {
    const result = [];
    let joinedArr = [];

    // Process each sub-array
    data.forEach((arr) => {
        const trimmedArr = arr.slice(toDiscard, -toDiscard);
        joinedArr = joinedArr.concat(trimmedArr); // Accumulate all trimmed elements for overall stats

        // Calculate min, avg, and max for each sub-array
        const min = Math.min(...trimmedArr);
        const max = Math.max(...trimmedArr);
        const avg = trimmedArr.reduce((sum, num) => sum + num, 0) / trimmedArr.length;
        result.push([min, avg, max]);
    });

    // Calculate overall min, avg, and max from joinedArr
    const totalMin = Math.min(...joinedArr);
    const totalMax = Math.max(...joinedArr);
    const totalAvg = joinedArr.reduce((sum, num) => sum + num, 0) / joinedArr.length;
    
    // Append overall min, avg, max to result
    result.push([totalMin, totalAvg, totalMax]);
    return result;
}

console.log(getMinAvgMax(2, [[800, 1200, 2100, 4100, 1300, 700], [1000, 1500, 4500, 5000, 5800, 2000, 1500]]));
// Expected output: [[2100, 3100, 4100], [4500, 5100, 5800], [2100, 4300, 5800]]