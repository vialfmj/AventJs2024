type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  let result: number[] = [];
  interface IResult2Item {
    I: number;
    R: number;
  }
  interface IResult2 {
    [index: number]: IResult2Item;
  }
  const result2: IResult2 = {};
  shoes.forEach((element: Shoe) => {
    if (!result2[element.size]) result2[element.size] = { I: 0, R: 0 };
    result2[element.size][element.type]++;
    if (result2[element.size]["I"] > 0 && result2[element.size]["R"] > 0) {
      result.push(element.size);
      result2[element.size]["I"]--;
      result2[element.size]["R"]--;
    }
  });

  return result;
}

const exampleInput5: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log({ exampleInput: exampleInput5 });

console.log({ result: organizeShoes(exampleInput5) });
