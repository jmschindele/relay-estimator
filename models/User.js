// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   uid: { type: String, required: true },
//   // project: { type: Schema.Types.Array,
//   // ref: "Project"},
//   project: { type: Array}
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;


// experiment with new models

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: { type: String, required: true },

  project: { type: Schema.Types.ObjectId,
  ref: "Project"},

  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
