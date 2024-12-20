function inBox(box: string[]): boolean {
  let isBoxEmpty: boolean = true;
  for (let i: number = 0; i < box.length; i++) {
    const line = box[i];
    if (line.includes("*")) isBoxEmpty = false;

    if ((i === 0 || i === box.length - 1) && line.includes("*")) {
      return false;
    }

    if (line.startsWith("*") || line.endsWith("*")) return false;
  }
  return !isBoxEmpty;
}

const exampleInput6 = ["####", "#  #", "##*#"];

console.log({ exampleInput6 });
console.log(inBox(exampleInput6));
