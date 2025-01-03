function drawRace(indices: number[], length: number): string {
  let result = "";
  indices.forEach((element, index, array) => {
    let newString = "";
    if (element === 0) newString = "~".repeat(length);
    else newString = "~".repeat(length - 1);
    newString += " ";
    if (element > 0)
      newString =
        newString.substring(0, element) +
        "r" +
        newString.substring(element, newString.length);

    if (element < 0)
      newString =
        newString.substring(0, length + element) +
        "r" +
        newString.substring(length + element, newString.length);

    newString = " ".repeat(array.length - index - 1) + newString;

    newString += "/" + (index + 1);
    newString += index === array.length - 1 ? "" : "\n";
    result += newString;
  });
  return result;
}

const exampleInput8 = {
  indices: [0, 5, -3],
  length: 10,
};

console.log(drawRace(exampleInput8.indices, exampleInput8.length));
