const UserService = require('../services/user.js')
function RegistrationRoutes (bot) {
  bot.onText(/^\/start$/, (msg, match) => {
    UserService.AddBotUser(msg.chat.id)
  })
}

module.exports = RegistrationRoutes
