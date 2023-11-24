const UserModel = require('../models/user')

class User {
  
  async createUser(query = {}) {
    try {
      const user = new UserModel(query)
      await user.save()
      return user
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = new User()