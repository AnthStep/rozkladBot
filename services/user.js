const UserRepository = require('../repositories/user.js')
const UserService = {
  AddBotUser: addBotUser
}

function addBotUser (id) {
  if (UserRepository.GetUsersList().indexOf(id) === -1) {
    UserRepository.AddUser(id)
    console.log(`${id} is connected`)
  }
}

module.exports = UserService
