function isTriangleNumber(number) {
  if (!Number.isInteger(number) || number < 0) return false;

  if (number === 0 || number === 1) return true;

  const discriminant = 1 + 8 * number;
  const sqrtDiscriminant = Math.sqrt(discriminant);

  if (!Number.isInteger(sqrtDiscriminant)) return false;

  const n = (-1 + sqrtDiscriminant) / 2;
  return Number.isInteger(n) && n > 0;
}

// Test cases
console.log(isTriangleNumber(6)); // true
console.log(isTriangleNumber(8)); // false
console.log(isTriangleNumber(10)); // true
console.log(isTriangleNumber(15)); // true
console.log(isTriangleNumber(0)); // true
console.log(isTriangleNumber(1)); // true
console.log(isTriangleNumber(-5)); // false
console.log(isTriangleNumber(3.5)); // false
