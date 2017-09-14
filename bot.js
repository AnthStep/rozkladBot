const TelegramBot = require('node-telegram-bot-api')
const token = require('./token')()
let bot

if (process.env.NODE_ENV === 'production') {
  bot = new TelegramBot(token)
  bot.setWebHook(process.env.HEROKU_URL + bot.token)
} else {
  bot = new TelegramBot(token, { polling: true })
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode')

module.exports = bot
