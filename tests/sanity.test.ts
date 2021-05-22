
function add (x: number, y: number) {
  return x+y;
}

test('Test', () => {

  expect(1+1).toBe(2);
  expect(add(1, 1)).toBe(2);
})
