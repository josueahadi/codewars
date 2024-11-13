function dnaStrand(dna) {
    return dna.split('')
        .map(char => {
            switch (char) {
                case 'A': return 'T';
                case 'T': return 'A';
                case 'C': return 'G';
                case 'G': return 'C';
                default: return char;
            }
        }).join('');
}

console.log("dnaStrand('ATTGC'):", dnaStrand('ATTGC'));
console.log("dnaStrand('GTAT'):", dnaStrand('GTAT'));
