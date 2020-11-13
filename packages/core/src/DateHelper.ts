export default class DateHelper {
  /**
   * Round a number to 2 d.p. if necessary, then round up
   * {@see https://stackoverflow.com/a/11832950/6024982}
   */
  private static round(number: number): number {
    return Math.ceil(Math.round((number + Number.EPSILON) * 100) / 100);
  }

  /**
   * @param timestamp Unix time {@link https://en.wikipedia.org/wiki/Unix_time}
   */
  static getRelativeDate(
    timestamp: number,
    currentTimestamp = Date.now()
  ): string {
    const secondsDifference = Math.abs((currentTimestamp - timestamp) / 1000);

    // If the timestamp is within the last few minutes,
    // then we should display the minute difference
    const minutesDifference = secondsDifference / 60;
    if (minutesDifference < 60) {
      return `${this.round(minutesDifference)}m ago`;
    }

    // hour difference
    const hoursDifference = minutesDifference / 60;
    if (hoursDifference < 24) {
      console.log(hoursDifference);
      return `${this.round(hoursDifference)} hours ago`;
    }

    return `${minutesDifference}`;
  }
}
