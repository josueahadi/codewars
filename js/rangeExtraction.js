function solution(list) {
    if (list.length === 0) return '';

    let result = [];
    let rangeStart = list[0];
    let rangeEnd = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] === list[i - 1] + 1) {
            rangeEnd = list[i];
        } else {
            if (rangeEnd - rangeStart >= 2) {
                result.push(`${rangeStart}-${rangeEnd}`);
            } else {
                result.push(`${rangeStart}`);
                if (rangeStart !== rangeEnd) {
                    result.push(`${rangeEnd}`);
                }
            }
            rangeStart = list[i];
            rangeEnd = list[i];
        }
    }

    if (rangeEnd - rangeStart >= 2) {
        result.push(`${rangeStart}-${rangeEnd}`);
    } else {
        result.push(`${rangeStart}`);
        if (rangeStart !== rangeEnd) {
            result.push(`${rangeEnd}`);
        }
    }

    return result.join(',');
}

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"