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

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send('Invalid ID format');
    }

    const user = await User.getUser({ _id: userId });
    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
};


module.exports = {
  createUser,
  getUser
}