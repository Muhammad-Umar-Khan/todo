const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tododb",
  password: "umar",
  port: 5432,
});

const home = (req, res) => {
  res.send("I am working on a todo app");
};

const allTodos = (req, res) => {
  pool.query("SELECT * FROM todo order by id", (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getOneTodo = (req, res) => {
  const { id } = req.params;
  pool.query("select * from todo where id = $1", [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addTodo = (req, res) => {
  const { task } = req.body;
  pool.query(
    "INSERT INTO todo (task) VALUES($1) RETURNING *",
    [task],
    (error) => {
      if (error) throw error;
      res.status(200).send(`${task} added `);
    }
  );
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  pool.query(
    "UPDATE todo SET task = $1 WHERE id = $2",
    [task, id],
    (error, result) => {
      if (error) throw error;
      res.status(200).send("Todo updated");
    }
  );
};

const removeTodo = (req, res) => {
  const { id } = req.params;
  pool.query("DELETE FROM todo WHERE id = $1", [id], (error) => {
    if (error) throw error;
    res.send("Todo deleted");
  });
};

module.exports = {
  home,
  allTodos,
  getOneTodo,
  addTodo,
  updateTodo,
  removeTodo,
};
