const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a new schema

const projectSchema = new Schema ({
    projectName: {type: String, required: true},
    projectInfo: {type: Schema.Types.ObjectId,
    ref: "Task"},
    date: { type: Date, default: Date.now }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

