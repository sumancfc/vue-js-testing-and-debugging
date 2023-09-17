// test("add two number", () => {
//   expect(2 + 2).toBe(4);
// });

//object assignment
// test("object assignment", () => {
//   const data: { [key: string]: number } = {};
//   data["one"] = 1;
//   data["two"] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/T/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
