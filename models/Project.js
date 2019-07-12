const mongoose = require("mongoose");
const Scema = mongoose.Schema;

const projectSchema = new Schema ({
    projectName: {type: String, required: true}
    projectInfo: {type: array}
})