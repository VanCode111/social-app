const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  profileImage: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  fullName: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("ProfileModel", profileSchema);
