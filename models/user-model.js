const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  fullName: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = model("User", UserSchema);
