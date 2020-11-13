export default class DateHelper {
  /**
   * Round a number to 2 d.p. if necessary, then round up
   * {@see https://stackoverflow.com/a/11832950/6024982}
   */
  private static round(number: number): number {
    // return Math.ceil(Math.round((number + Number.EPSILON) * 100) / 100);
    return Math.ceil(Math.round((number + Number.EPSILON) * 100) / 100);
  }

  /**
   * Get a nicely stringified version of relative time between two timestamps
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
    const hoursDifference = this.round(minutesDifference / 60);
    if (hoursDifference < 24) {
      return `${hoursDifference} hour${hoursDifference === 1 ? "" : "s"} ago`;
    }

    return `${minutesDifference}`;
  }
}
