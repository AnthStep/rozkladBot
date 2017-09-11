const schelduleLoop = setInterval(checkScheldule, 60000)
const SchelduleRepository = require('./../repositories/scheldule')

function checkScheldule () {
  let timeStamp = new Date()
  let Day = (timeStamp.getDay() || 7) + ''
  
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

Date.prototype.getWeek = function() {

}

module.exports = schelduleLoop
