import DateHelper from "../src/DateHelper";

/**
 * Get two timestamps for testing.
 */
function getTestTime({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}): [number, number] {
  let totalSeconds = seconds;
  totalSeconds += minutes * 60;
  totalSeconds += hours * 60 * 60;
  totalSeconds += days * 60 * 60 * 24;

  const totalMilliseconds = totalSeconds * 1000;

  const date = Date.now();
  return [date, date - totalMilliseconds];
}

test("Testing almost same", () => {
  const date1 = DateHelper.getRelativeTime(1605236401152, 1605236402465);
  const date2 = DateHelper.getRelativeTime(...getTestTime({ seconds: 10 }));

  expect(date1).toBe("1m ago");
  expect(date2).toBe("1m ago");
});

test("Testing minutes apart", () => {
  const date1 = DateHelper.getRelativeTime(
    ...getTestTime({ minutes: 2, seconds: 10 })
  );
  const date2 = DateHelper.getRelativeTime(1605235670659, 1605235814505);
  expect(date1).toBe("2m ago");
  expect(date2).toBe("2m ago");
});

test("Testing 1 hour apart", () => {
  const date1 = DateHelper.getRelativeTime(1605238208231, 1605234608227);
  const date2 = DateHelper.getRelativeTime(...getTestTime({ hours: 1 }));
  expect(date1).toBe("1 hour ago");
  expect(date2).toBe("1 hour ago");
});

test("Testing 2 hours apart", () => {
  const date1 = DateHelper.getRelativeTime(1605249270322, 1605242070305);
  const date2 = DateHelper.getRelativeTime(...getTestTime({ hours: 2 }));
  expect(date1).toBe("2 hours ago");
  expect(date2).toBe("2 hours ago");
});

test("Testing 2 hours 10 mins apart", () => {
  const date1 = DateHelper.getRelativeTime(1605249270322, 1605242070305);
  const date2 = DateHelper.getRelativeTime(
    ...getTestTime({ hours: 2, minutes: 10 })
  );
  expect(date1).toBe("2 hours ago");
  expect(date2).toBe("2 hours ago");
});

test("Testing 24 hours (1 day) apart", () => {
  const date = DateHelper.getRelativeTime(...getTestTime({ hours: 24 }));
  expect(date).toBe("1 day ago");
});

test("Testing 29 days apart", () => {
  const date = DateHelper.getRelativeTime(...getTestTime({ days: 29 }));
  expect(date).toBe("29 days ago");
});

test("Testing 30 days apart", () => {
  const date = DateHelper.getRelativeTime(...getTestTime({ days: 30 }));
  expect(date).toBe("1 month ago");
});
