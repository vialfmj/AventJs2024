type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
  interface Result {
    [category: string]: {
      [item: string]: number;
    };
  }
  let result: Result = {};
  inventory.forEach((element) => {
    if (!result[element.category])
      result[element.category] = {
        [element.name]: element.quantity,
      };
    else {
      if (!result[element.category][element.name])
        result[element.category] = {
          ...result[element.category],
          [element.name]: element.quantity,
        };
      else {
        result[element.category][element.name] =
          result[element.category][element.name] + element.quantity;
      }
    }
  });
  return result;
}
const array1: Inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];
console.log({ exampleInput: array1 });
console.log({ result: organizeInventory(array1) });
