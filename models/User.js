const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  project: { type: Array}
});

const User = mongoose.model("User", userSchema);

module.exports = User;


