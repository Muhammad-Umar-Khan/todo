import { useState } from "react";
// import axios from "axios";
const TodoInput = () => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { task };
      await fetch("http://localhost:3001/todos", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      setTask("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8 offset-2 d-flex mt-5">
            <input
              className="form-control"
              value={task}
              onChange={handleChange}
            ></input>
            <button className="btn btn-success" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
