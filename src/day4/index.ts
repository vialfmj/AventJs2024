function createXmasTree(height: number, ornament: string): string {
  let result = "";
  for (let i: number = 0; i < height; i++) {
    result +=
      "_".repeat(height - i - 1) +
      ornament.repeat(2 * i + 1) +
      "_".repeat(height - i - 1) +
      "\n";
  }
  result += "_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n";
  result += "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
  return result;
}
const exampleInput4 = {
  height: 5,
  ornament: "+",
};
console.log({ exampleInput4 });
console.log(createXmasTree(exampleInput4.height, exampleInput4.ornament));
