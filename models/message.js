const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  conversationId: { type: Schema.Types.ObjectId, required: true },
  sender: { type: Schema.Types.ObjectId, required: true },
  text: { type: Schema.Types.String },
});

module.exports = model("Message", messageSchema);
