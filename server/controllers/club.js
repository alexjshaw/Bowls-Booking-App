const clubDatabase = require("../database/club");

const { sendDataResponse, sendErrorResponse } = require('../utility/responses')

const createClub = async (req, res) => {
  try {
    const query = {
      name: req.body.name,
      description: req.body.description
    }
    const newClub = await clubDatabase.createClub(query);
    return sendDataResponse(res, 201, newClub)
  } catch (error) {
    return sendErrorResponse(res, 400, error.message)
  }
};

const updateClub = async (req, res) => {
  try {
    const clubId = req.params.clubId;
    const query = req.body;
    const updatedClub = await clubDatabase.updateClub(clubId, query);
    return sendDataResponse(res, 201, updatedClub)
  } catch (error) {
    return sendErrorResponse(res, 400, error.message)
  }
};

const getClubs = async (req, res) => {
  try {
    const clubs = await clubDatabase.getClubs({})
    if (!clubs) {
      return res.status(404).send('No Clubs Found')
    }

    res.json(clubs)
  } catch (error) {
    return res.status(500).send('Server Error', error)
  }
}

module.exports = {
  createClub,
  updateClub,
  getClubs
};
