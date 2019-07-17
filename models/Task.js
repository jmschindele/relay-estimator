const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
    title: String,
    hours: String,
    rate: String,
    date: { type: Date, default: Date.now }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;