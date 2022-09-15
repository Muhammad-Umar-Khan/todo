const DeleteTodo = ({ todo, todos, setTodos }) => {
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/todos/${id}`, {
        method: "Delete",
      });
      const filtred = todos.filter((todo) => todo.id !== id);
      setTodos(filtred);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default DeleteTodo;
