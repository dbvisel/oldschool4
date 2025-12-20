export const cleanDate = (
  start: string,
  end: string,
  allDay: boolean
): string => {
  const startDate = new Date(start).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    // timeZone: "America/New_York",
  });
  const startTime = new Date(start).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    // timeZone: "America/New_York",
    timeZoneName: "short",
  });
  const endDate = new Date(end).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    // timeZone: "America/New_York",
  });
  const endTime = new Date(end).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    // timeZone: "America/New_York",
    timeZoneName: "short",
  });

  if (allDay) {
    const startDate = new Date(start).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      // timeZone: "America/New_York",
    });
    return startDate;
  }
  if (end) {
    if (startDate === endDate) {
      return `${startDate} from ${startTime} to ${endTime}`;
    }
    return `${startDate} at ${startTime} to ${endDate} at ${endTime}`;
  }
  return `${startDate} at ${startTime}`;
};
