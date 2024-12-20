let a: (string | undefined)[];

function createFrame(names: (string | undefined)[]): string {
  let boxSize: number = names.reduce((prev, curr) => {
    if (!curr) return prev;
    else {
      return curr.length > prev ? curr.length : prev;
    }
  }, 0);
  let result = names.map((name) => {
    return (
      "* " + name + " ".repeat(boxSize - (name ? name.length : 0)) + " *\n"
    );
  });
  return (
    "*".repeat(boxSize + 4) + "\n" + result.join("") + "*".repeat(boxSize + 4)
  );
}
const exampleInput2 = ["midu", "madeval", "educalvolpz"];
console.log({ exampleInput2 });
console.log(createFrame(exampleInput2));
