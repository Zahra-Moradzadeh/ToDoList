const Task = require("../models/todos");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findOne({ _id: id });
    return res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createNewTask = async (req, res) => {
  try {
    const newTaskData = req.body;
    const task = await Task.create(newTaskData);
    return res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTaskData = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const newTaskData = req.body;
    const task = await Task.findByIdAndUpdate(_id, { ...newTaskData, _id }, { new: true });
    return res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTaskData = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id });
    return res.status(202).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports ={ getAllTasks, getOneTask, createNewTask, updateTaskData, deleteTaskData };
