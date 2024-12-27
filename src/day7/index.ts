function fixPackages(packages: string): string {
  // Code here

  let result = packages;
  while (result.includes("(")) {
    let start = result.lastIndexOf("(");
    let end = result.indexOf(")", start);
    let s = result.slice(start + 1, end);
    let s2 = s.split("").reverse().join("");

    result = result.replace(result.substring(start, end + 1), s2);
  }
  return result;
}

const exampleInput7 = "a(bc(def)g)h";

console.log({ exampleInput: exampleInput7 });

console.log({ result: fixPackages(exampleInput7) });
