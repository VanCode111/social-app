const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  password: { type: String, required: true },
});

module.exports = model("User", UserSchema);
