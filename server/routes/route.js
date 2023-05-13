const { Router } = require("express");
const { getAllTasks, getOneTask, createNewTask, updateTaskData, deleteTaskData } = require("../controller/todo");

const router = Router();

/**
 * @URL : /task/
 * @Method : GET
 * @Status : Public
 * @Description : get all tasks data
 */
router.get("/", getAllTasks);

/**
 * @URL : /task/:id
 * @Method : GET
 * @Status : Public
 * @Description : get one task data
 */
router.get("/:id", getOneTask);

/**
 * @URL : /task/
 * @Method : POST
 * @Status : Public
 * @Description : create new task
 */
router.post("/", createNewTask);

/**
 * @URL : /task/:id
 * @Method : PATCH
 * @Status : Public
 * @Description : update task data
 */
router.patch("/:id", updateTaskData);

/**
 * @URL : /task/:id
 * @Method : DELETE
 * @Status : Public
 * @Description : delete task data
 */
router.delete("/:id", deleteTaskData);

module.exports = router;
