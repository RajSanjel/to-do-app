import { Navbar } from "./components/Navbar";
import { AddToDo } from "./components/AddToDo";
import { ToDoProvider } from "./context/ToDoContext";
import { ListToDo } from "./components/ListToDo";

function App() {
  return (
    <div className="bg-slate-100">
        <Navbar />
        <ToDoProvider>
        <div className="container ">
          <AddToDo />
          <ListToDo />
        </div>
    </ToDoProvider>
      </div>
  );
}

export default App;
