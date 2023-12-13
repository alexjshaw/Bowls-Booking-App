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

  async getUser(query = {}) {
    try {
      const user = await mongoose.model('User').findOne(query).exec();
      return user;
    } catch (error) {
      throw error; // You might want to handle this more gracefully
    }
  }
}

module.exports = new User()