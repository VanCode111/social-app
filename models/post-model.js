const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: false,
    ref: "User",
  },
  photo: {
    type: Schema.Types.String,
  },
  text: { type: String },
});

module.exports = model("Post", postSchema);
