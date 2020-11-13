export default class DateHelper {
  /**
   * Get cure
   * @param timestamp Unix time {@link https://en.wikipedia.org/wiki/Unix_time}
   */
  static getRelativeDate(timestamp: number): string {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - timestamp;

    const minutesDiffence = timeDifference / 60;
    return '';
  }
}
