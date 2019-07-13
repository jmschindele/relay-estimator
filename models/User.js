const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: { type: String, required: true },
  // project: { type: Schema.Types.ObjectId,
  // ref: "Project"}
  project: { type: Array}
});

const User = mongoose.model("User", userSchema);

module.exports = User;


