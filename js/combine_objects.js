function combine(objectA, ...restArgs) {
    let combined = {...objectA}; 
    restArgs.forEach(obj => {
        for (const key in obj) {
        if (combined.hasOwnProperty(key) && typeof obj[key] == 'number') {
            combined[key] += obj[key];
        } else {
            combined[key] = obj[key];
        }
        }
    });
    return combined;
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

combine(objA,objB,objC);