const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const ToDoSchema = new Schema({
  title: {
    type: String,
    require: [true, "must provide course name"],
    maxlength: [20, "Task must not be more than 20 characters"],
  }
});

module.exports = model("todo", ToDoSchema);
