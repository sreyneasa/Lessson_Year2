// Instructions:
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)
type Item = { name: string; quantity?: number };


let item1: Item = { name: "computer", quantity: 4 };
let item2: Item = { name: "chair" };

// TODO Replace "any" by the appropriate annotation
// TODO Add annotation for the return type
function getItemInfo(item: Item): string {
  return item.quantity + " " + item.name;
}

console.log(getItemInfo(item1));

// After aing the annotion, this instrution should be in error !
console.log(getItemInfo(item2));
