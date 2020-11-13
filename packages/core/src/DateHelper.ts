export default class DateHelper {
  /**
   * Get a nicely stringified version of relative time between two timestamps
   * @param timestamp Unix time {@link https://en.wikipedia.org/wiki/Unix_time}
   */
  static getRelativeTime(
    timestamp: number,
    currentTimestamp = Date.now()
  ): string | null {
    const secondsDifference = Math.abs((currentTimestamp - timestamp) / 1000);

    // If the timestamp is within the last few minutes,
    // then we should display the minute difference
    const minutesDifference = secondsDifference / 60;
    if (minutesDifference < 60) {
      let roundedTime = Math.round(minutesDifference);
      if (roundedTime === 0) {
        roundedTime = 1;
      }
      return `${roundedTime}m ago`;
    }

    // hour difference
    const hoursDifference = Math.round(minutesDifference / 60);
    if (hoursDifference < 24) {
      return `${hoursDifference} hour${hoursDifference === 1 ? "" : "s"} ago`;
    }

    // day difference
    // (Month is simplified to 30 days)
    const days = Math.round(hoursDifference / 24);
    if (days < 30) { 
      return `${days} day${days === 1 ? "" : "s"} ago`;
    }

    // day difference
    // (Month is simplified to 30 days)
    const months = Math.round(days / 30);
    if (months < 12) { 
      return `${months} month${months === 1 ? "" : "s"} ago`;
    }

    return null;
  }
}
