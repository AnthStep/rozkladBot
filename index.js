const TelegramBot = require('node-telegram-bot-api')
const token = require('./token')()
console.log(token)
const bot = new TelegramBot(token, {polling: true})
require('./routes/registration.js')(bot)

console.log('Bot started...')
