const bot = require('./bot')
console.log('Bot started...')
require('./routes/registration.js')(bot)
const SchelduleLoop = new (require('./services/schelduleloop'))(bot)
SchelduleLoop.startLoop()
console.log('Scheldule loop started...')
