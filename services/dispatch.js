const UserRepository = require('./../repositories/user')

class DispatchService {
  constructor (bot) {
    this.bot = bot
  }

  sendSchelduleItems (items) {
    let users = UserRepository.GetUsersList()
    items.forEach(item => {
      let sendedMessage = `Следующая пара:
${item.Title}
Начало в ${item.Time} 
Корпус №${item.Housing}, кабинет №${item.Classroom} 
Преподаватель: ${item.Teacher}`
      users.forEach(user => {
        this.bot.sendMessage(user, sendedMessage)
        console.log(`Scheld sended to user - ${user}`)
      })
    })
  }
}

module.exports = DispatchService
