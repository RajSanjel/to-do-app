import { Button } from "@/components/ui/button";
import { Navbar } from "./components/Navbar";
import { AddToDo } from "./components/AddToDo";
import { ListToDo } from "./components/ListToDo";

function App() {
  return (
    <>
      <Navbar />
    <div className="container ">
      <AddToDo />
      <ListToDo/>
    </div>
    </>
  );
}

export default App;
