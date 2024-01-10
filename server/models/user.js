const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number },
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Club",
    required: true
  },
  firebaseUID: { type: String, required: true},
  admin: { type: Boolean, default: false },
  approved: { type: Boolean, default: false}
}, { timestamps: true })

userSchema.index({ club: 1 });

module.exports = mongoose.model('User', userSchema)
