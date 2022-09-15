import "./App.css";
import ListAllTodos from "./components/ListAllTodos";
import TodoInput from "./components/TodoInput";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
      <TodoInput />
      <ListAllTodos />
    </div>
  );
}

export default App;
