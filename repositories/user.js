const jsonfile = require('jsonfile')
const path = require('path')
const file = path.resolve('./data/users.json')
const data = jsonfile.readFileSync(file)
const UserRepository = {
  AddUser: addUser,
  GetUsersList: getUsersList
}

function addUser (id) {
  data.push(id)
  jsonfile.writeFileSync(file, data)
}

function getUsersList () {
  return data
}

module.exports = UserRepository
