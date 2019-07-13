const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a new schema

const projectSchema = new Schema ({
    projectName: {type: String, required: true},
    projectInfo: {type: Array}
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;


