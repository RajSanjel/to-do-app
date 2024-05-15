import "./DisplayToDo.css";

export function DisplayToDo() {
  return (
    <div className="displayToDo">
      <h2>TO DOs</h2>
      <div className="toDoItem">
        <p className="toDoTitle"> 1. Test</p>
        <p className="todoDesc">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          provident cum, non a, eligendi voluptas amet quas nemo vero recusandae
          harum, rem, tempora maiores? Eaque, officiis quod sapiente nostrum
          ipsam expedita optio, similique dolor quos odio eos quas repellat
          accusantium! Harum nulla id, aliquam voluptate soluta at quod alias
          deserunt et? Iure nesciunt voluptatem ad tenetur eligendi error cumque
          nobis?
        </p>
      </div>
      <div className="toDoItem">
        <p className="toDoTitle"> 2. Test</p>
        <p className="todoDesc">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          provident cum, non a, eligendi voluptas amet quas nemo vero recusandae
          harum, rem, tempora maiores? Eaque, officiis quod sapiente nostrum
          ipsam expedita optio, similique dolor quos odio eos quas repellat
          accusantium! Harum nulla id, aliquam voluptate soluta at quod alias
          deserunt et? Iure nesciunt voluptatem ad tenetur eligendi error cumque
          nobis?
        </p>
      </div>
    </div>
  );
}
