function prepareGifts(gifts: number[]): number[] {
  return [...new Set(gifts.sort((a, b) => a - b))];
}
const exampleInput = [3, 1, 2, 3, 4, 2, 5];
console.log({ exampleInput });
console.log({ result: prepareGifts(exampleInput) });
