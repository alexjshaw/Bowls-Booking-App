const mongoose = require('mongoose')

const rinkSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Club",
    required: true
  }
},
{ timestamps: true })

rinkSchema.index({ club: 1, number: 1 }, { unique: true })

module.exports = mongoose.model('Rink', rinkSchema)