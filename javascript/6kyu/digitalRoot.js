function digitalRoot(n) {
  const result = n
    .toString()
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  console.log(result);
  if (result.toString().length > 1) {
    return digitalRoot(result);
  } else {
    return result;
  }
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
