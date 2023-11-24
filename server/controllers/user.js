const userDatabase = require("../database/user");
const mongoose = require('mongoose')

const { sendDataResponse, sendErrorResponse } = require('../utility/responses')

const createUser = async (req, res) => {
  try {
    const query = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      club: new mongoose.Types.ObjectId(req.body.club)
    }
    const newUser = await userDatabase.createUser(query)
    return sendDataResponse(res, 201, newUser)
  } catch (error) {
    return sendErrorResponse(res, 400, error.message)
  }
}

module.exports = {
  createUser
}