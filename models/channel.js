const mongoose = require("mongoose");

const logChannelSchema = new mongoose.Schema({
  GuildID: String,
  ChannelID: String,
});

module.exports = mongoose.model("LogChannel", logChannelSchema);
