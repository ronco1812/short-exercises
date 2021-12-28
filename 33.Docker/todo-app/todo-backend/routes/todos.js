const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const redis = require("../redis");

router.get("/statistics", async (_req, res) => {
  const added_todos = await redis.getAsync("counter");
  res.json({ added_todos });
});

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });

  const counter = await redis.getAsync("counter");
  await redis.setAsync("counter", counter + 1);

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  const task = await req.todo;

  res.json(task);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  const { id } = req.params;

  const task = await Todo.findByIdAndUpdate(id, { done: true });

  res.json(task);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;