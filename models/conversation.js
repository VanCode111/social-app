const { Schema, model } = require("mongoose");

const conversationSchema = new Schema({
  members: { type: Schema.Types.Array },
});

module.exports = model("Conversation", conversationSchema);
