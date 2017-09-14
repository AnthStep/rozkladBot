const SchelduleRepository = require('./../repositories/scheldule')
const DispatchServiceClass = require('./dispatch')

function checkScheldule (checkPeriod, bot) {
  return function () {
    let timeStamp = new Date((new Date()).getTime() + (60 * 60 * 1000 * 3))
    let day = (timeStamp.getDay() || 7) + ''
    let week = (getWeekNumber() % 2) + 1 + ''
    let minTime = timeStamp.getTime() + 30 * checkPeriod
    let maxTime = timeStamp.getTime() + 30 * checkPeriod + (30 * checkPeriod - 1)
    console.log(`${timeStamp.getHours()}:${timeStamp.getMinutes()} - sheldule cheked`)
    const DispatchService = new DispatchServiceClass(bot)
    DispatchService.sendSchelduleItems(SchelduleRepository.GetSchelduleItems({day, week, minTime, maxTime}))
  }
}

function getWeekNumber (d = new Date()) {
  const year = new Date(d.getFullYear() - 1, 11, 31)
  if (d.getMonth() === 0 && (d.getDate() + year.getDay()) < 8) {
    return getWeekNumber(year)
  } else if (year.getDay() && year.getDay() < 4) {
    return Math.ceil((((d - year) / 86400000) + year.getDay()) / 7)
  } else {
    return Math.ceil(((((d - year) / 86400000) + year.getDay()) / 7) - 1)
  }
}

class SchelduleLoop {
  constructor (bot) {
    this.bot = bot
  }

  startLoop (checkPeriod = 60000) {
    if (this.loop) {
      clearInterval(this.loop)
    }
    this.loop = setInterval(checkScheldule(checkPeriod, this.bot), checkPeriod)
  }

  stopLoop () {
    if (this.loop) {
      clearInterval(this.loop)
      this.loop = null
    }
  }
}

module.exports = SchelduleLoop
