export function reverseWords(str: string): string {
  const strToArray: string[] = str.split(" ");
  const reversedArray: string[] = strToArray.map((word) =>
    word.split("").reverse().join("")
  );
  const result: string = reversedArray.join(" ");
  return result;
}
