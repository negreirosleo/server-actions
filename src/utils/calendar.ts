import { DateTime, Interval } from "luxon";

const generateCalendarDays = (calendarDate: DateTime) => {
  const firstCalendarDay = calendarDate.startOf("month").startOf("week");
  const lastCalendarDay = calendarDate.endOf("month").endOf("week");
  return Interval.fromDateTimes(firstCalendarDay, lastCalendarDay)
    .splitBy({ day: 1 })
    .reduce<Array<DateTime<true>>>((acc, nextValue) => {
      if (nextValue.start) return [...acc, nextValue.start];

      return acc;
    }, []);
};

export const today = DateTime.now();
export const calendarDays = generateCalendarDays(today);
