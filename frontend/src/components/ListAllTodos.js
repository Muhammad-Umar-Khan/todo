import { fragment, useEffect, useState } from "react";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

const ListAllTodos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      var allTodos = await fetch("http://localhost:3001/todos");
      var parsedTodos = await allTodos.json();
      setTodos(parsedTodos);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-3">
          <table className="table text-center">
            <thead>
              <tr>
                <th>Task</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td>{todo.task}</td>
                    <td>
                      <EditTodo />
                    </td>
                    <td>
                      <DeleteTodo
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListAllTodos;
