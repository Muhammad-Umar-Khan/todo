import "./App.css";
import ListAllTodos from "./components/ListAllTodos";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div>
      <TodoInput />
      <ListAllTodos />
    </div>
  );
}

export default App;
