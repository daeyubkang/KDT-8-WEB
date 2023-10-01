const { Todos } = require("../models");

const get_todo = async (req, res) => {
  try {
    const todo = await Todos.findAll({
      attributes: ["id", "title", "done"],
    });
    res.send(todo);
  } catch (error) {
    console.log(error);
  }
};

const post_todo = async (req, res) => {
  try {
    console.log(req.body);
    const { title, done } = req.body;
    const todo = await Todos.create({
      title,
      done,
    });
    console.log(todo);
    res.send(todo);
  } catch (error) {
    console.log(error);
  }
};

const patch_todo = (req, res) => {
  const { id, title, done } = req.body;
  Todos.update({ title, done }, { where: { id } }).then(() => {
    res.json({ result: true });
  });
};

const delete_todo = (req, res) => {
  const { id } = req.body;
  Todos.destroy({
    where: { id },
  }).then(() => {
    res.json({ result: true });
  });
};

module.exports = { get_todo, post_todo, patch_todo, delete_todo };
