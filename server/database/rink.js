const RinkModel = require('../models/rink')

class Rink {

  async createRink(query = {}) {
    try {
      const rink = new RinkModel(query)
      await rink.save()
      return rink
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async getRinksByClub(clubId) {
    try {
      return await RinkModel.find({ club: clubId });
    } catch (error) {
      throw new Error(error.message);
    }
  }

}

module.exports = new Rink()