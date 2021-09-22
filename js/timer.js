import refs from './refs.js'

const {
  daysContent,
  hoursContent,
  minsContent,
  secondsContent,
} = refs

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate.getTime();
    }

    intervalID = setInterval(() => {
      let currentDate = Date.now()
      this.deltaTime = this.targetDate - currentDate

      this.insertData(daysContent, this.getDaysCount(this.deltaTime))
      this.insertData(hoursContent, this.getHoursCount(this.deltaTime))
      this.insertData(minsContent, this.getMinsCount(this.deltaTime))
      this.insertData(secondsContent, this.getSecondsCount(this.deltaTime))
      this.finishTime(this.deltaTime);
    }, 1000)

  padValue(value, num, symbol) {
    return String(value).padStart(num, symbol)
    }
    
  getDaysCount(time) {
    return this.padValue(Math.floor(time / (1000 * 60 * 60 * 24)), 3, '0')
  }
  getHoursCount(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      2,
      '0',
    )
  }
  getMinsCount(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      2,
      '0',
    )
  }
  getSecondsCount(time) {
    return this.padValue(Math.floor((time % (1000 * 60)) / 1000), 2, '0')
    }
    
  insertData(place, value) {
    place.textContent = value
    }
    
    finishTime(time) {
    if (time < 0) {
      clearInterval(this.intervalId)
      refs.timer.textContent = 'This is THE END!';
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});
