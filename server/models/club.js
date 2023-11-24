const mongoose = require('mongoose')

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: "" },
  website: { type: String, default: ""},
  phone: { type: Number }
},
{ timestamps: true })

module.exports = mongoose.model('Club', clubSchema)