const sumConsecutives = (s) => {
    return s.reduce((accumulator, currentValue, i, s) => 
        (currentValue === s[i - 1] ? accumulator[accumulator.length-1]+=currentValue : accumulator.push(currentValue), accumulator), [])
}

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))