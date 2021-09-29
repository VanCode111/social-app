const { Schema, model } = require("mongoose");

const UserRouterSchema = new Schema({
  path: { type: String, unique: true, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: true,
    required: true,
  },
});

module.exports = model("UserRouter", UserRouterSchema);
