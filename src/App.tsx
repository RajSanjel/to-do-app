import { AddToDo } from "./components/AddToDo";
import { DisplayToDo } from "./components/DisplayToDo";

function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <AddToDo />
      <DisplayToDo />
    </div>
  );
}

export default App;
