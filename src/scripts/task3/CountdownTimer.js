export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this.targetDate = targetDate;
    this.selector = selector;
    (this.timer = document.querySelector(selector)),
      (this.days = document.querySelector(`${selector} [data-value="days"]`)),
      (this.hours = document.querySelector(`${selector} [data-value="hours"]`)),
      (this.mins = document.querySelector(`${selector} [data-value="mins"]`)),
      (this.secs = document.querySelector(`${selector} [data-value="secs"]`));
  }

  start() {
    if (!this.timer) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.currentTime = Date.now();
      const time = this.targetDate - this.currentTime;
      if (time < 0) {
        clearInterval(this.intervalId);
        return;
      }
      this.updateTimerFace(this.getTimeComponent(time));
    }, 1000);
  }

  getTimeComponent(time) {
    /*
     * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
     * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
     */
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    /*
     * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
     * остатка % и делим его на количество миллисекунд в одном часе
     * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
     */
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );

    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateTimerFace({ days, hours, mins, secs }) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }
}
