function orderWeight(strng) {
  if (strng === "") {
    return "";
  }

  return strng
    .split(" ")
    .sort((a, b) => {
      const sumA = a.split("").reduce((sum, num) => sum + parseInt(num), 0);
      const sumB = b.split("").reduce((sum, num) => sum + parseInt(num), 0);
      if (sumA === sumB) {
        return a.localeCompare(b);
      }
      return sumA - sumB;
    })
    .join(" ");
}

orderWeight("103 123 4444 99 2000");
