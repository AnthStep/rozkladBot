const UserRepository = require('./../repositories/user')

class DispatchService {
  constructor (bot) {
    this.bot = bot
  }

  sendSchelduleItems (items) {
    let users = UserRepository.GetUsersList()
    items.forEach(item => {
      let sendedMessage = encodeURIComponent(`${item.Title} \n ${item.Time} \n ${item.Housing}-${item.ClassRoom} \n ${item.Teacher}`)
      users.forEach(user => {
        this.bot.sendMessage(user, sendedMessage)
        console.log(`Message sended to user - ${user}`)
      })
    })
  }
}

module.exports = DispatchService
