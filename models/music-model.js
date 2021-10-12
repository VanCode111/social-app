const { Schema, model } = require("mongoose");

const MusicSchema = new Schema({
  title: { type: Schema.Types.String, required: true },
  url: { type: Schema.Types.String, required: true, unique: true },
  duration: { type: Schema.Types.Number },
  image: { type: Schema.Types.String },
});

module.exports = model("Music", MusicSchema);
