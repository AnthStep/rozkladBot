const jsonfile = require('jsonfile')
const path = require('path')
const file = path.resolve('./data/scheldule.json')
const data = jsonfile.readFileSync(file)
const SchelduleRepository = {
  GetSchelduleItems: getSchelduleItems
}

function getSchelduleItems ({ day, week, maxTime, minTime } = {}) {
  let returnData = data.filter(item => {
    let itemTime = new Date()
    itemTime.setHours(Number(item.Time.split(':')[0]))
    itemTime.setMinutes(Number(item.Time.split(':')[1]))
    itemTime.setSeconds(0)
    itemTime.getTime()
    if ((day && (day !== item.Day)) || (week && item.Week && (week !== item.Week)) || (minTime && (minTime > itemTime)) || (maxTime && (maxTime < itemTime))) {
      return false
    }
    console.log(item)
    return true
  })

  return returnData
}

module.exports = SchelduleRepository
