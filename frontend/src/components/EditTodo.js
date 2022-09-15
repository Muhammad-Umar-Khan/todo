import { useState } from "react";

const EditTodo = ({ todo }) => {
  const [task, setTask] = useState(todo.task);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleEdit = async () => {
    try {
      const body = { task };
      await fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" },
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.id}`}
      >
        Edit
      </button>
      <div className="modal fade" id={`id${todo.id}`} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <input value={task} onChange={handleChange}></input>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
