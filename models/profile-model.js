const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  profileImage: { type: String },
});

module.exports = model("ProfileModel", profileSchema);
