"use strict";
function add(x, y) {
    return x + y;
}
test('Test', function () {
    expect(1 + 1).toBe(2);
    expect(add(1, 1)).toBe(2);
});
