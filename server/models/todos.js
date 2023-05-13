const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const TodoSchema = new Schema({
  title: {
    type: String,
    require: [true, "title is require!!"],
    maxlength: [20, "your title should be 20 character"],
  },
  deadline: Date,
  category: String,
});

module.exports = model("todos", TodoSchema);
