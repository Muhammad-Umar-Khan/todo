const http = require("http");
const path = require("path");
const express = require("express");
const db = require("./queries");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("./home");
});
app.get("/todos", db.allTodos);
app.get("/todos/:id", db.getOneTodo);
app.post("/todos", db.addTodo);
app.put("/todos/:id", db.updateTodo);
app.delete("/todos/:id", db.removeTodo);

server.listen(3001, () => {
  console.log("Serving on port 3001");
});
