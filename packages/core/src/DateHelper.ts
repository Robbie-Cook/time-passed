export default class DateHelper {
  /**
   * @param timestamp Unix time {@link https://en.wikipedia.org/wiki/Unix_time}
   */
  static getRelativeDate(
    timestamp: number,
    currentTimestamp = Date.now()
    ): string {
      console.log('currentTimestamp', currentTimestamp);
    const secondsDifference = (currentTimestamp - timestamp) / 1000;
    
    // If the timestamp is within the last few minutes,
    // then we should display the minute difference
    const minutesDiffence = (secondsDifference) / 60 ;
    if (minutesDiffence < 60) {
      return `${Math.ceil(minutesDiffence)}m ago`;
    }

    // hour difference
    const hoursDifference = minutesDiffence / 60;
    if (hoursDifference < 24) {
      return `${Math.ceil(hoursDifference)} hours ago`;
    }

    return `${minutesDiffence}`;
  }
}
