import DateHelper from "../src/DateHelper";

test("Testing almost same", () => {
  const date = DateHelper.getRelativeDate(1605236401152, 1605236402465);
  expect(date).toBe("1m ago");
});

test("Testing minutes apart", () => {
  const date = DateHelper.getRelativeDate(1605235670659, 1605235814505);
  expect(date).toBe("3m ago");
});

test("Testing hours apart", () => {
  const date = DateHelper.getRelativeDate(1605235670659, 1605235814505);
  expect(date).toBe("3m ago");
});
