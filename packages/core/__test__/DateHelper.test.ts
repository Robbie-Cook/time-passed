import DateHelper from "../src/DateHelper";

/**
 * Get two timestamps for testing
 */
function getTestTime(hours = 0, minutes = 0, seconds = 0): [number, number] {
  let totalSeconds = seconds;
  totalSeconds += minutes * 60;
  totalSeconds += hours * 60 * 60;

  const totalMilliseconds = totalSeconds * 1000;

  const date = Date.now();
  return [date, date - totalMilliseconds];
}

test("Testing almost same", () => {
  const date1 = DateHelper.getRelativeDate(1605236401152, 1605236402465);
  const date2 = DateHelper.getRelativeDate(...getTestTime(0, 0, 10));

  expect(date1).toBe("1m ago");
  expect(date2).toBe("1m ago");
});

test("Testing minutes apart", () => {
  const date1 = DateHelper.getRelativeDate(...getTestTime(0, 3, 10));
  const date2 = DateHelper.getRelativeDate(1605235670659, 1605235814505);
  expect(date1).toBe("3m ago");
  expect(date2).toBe("3m ago");
});

test("Testing 1 hour apart", () => {
  const date = DateHelper.getRelativeDate(1605238208231, 1605234608227);
  expect(date).toBe("1 hour ago");
});

test("Testing 2 hours apart", () => {
  const date = DateHelper.getRelativeDate(1605249270322, 1605242070305);
  expect(date).toBe("2 hours ago");
});
test("Testing 2 hours 10 mins apart", () => {
  const date = DateHelper.getRelativeDate(1605249270322, 1605242070305);
  expect(date).toBe("2 hours ago");
});
