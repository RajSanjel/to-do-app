import "./AddToDo.css";
const inputBtnStyle = {
  padding: "0.5em",
  fontSize: "18px",
  display: "block",
};

export function AddToDo() {
  return (
    <div>
      <div
        className="addToDo"
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2>Add To do</h2>
        <label htmlFor="todoTitle">
          {" "}
          <p className="title">Title:</p>
          <input
            type="text"
            name="todo"
            id="todoTitle"
            placeholder="Title"
            style={inputBtnStyle}
          />
        </label>
        <br />
        <label htmlFor="todoDesc">
          {" "}
          <p className="title">Describe:</p>
          <textarea
            name="todoDesc"
            id="todoDesc"
            placeholder="Describe"
            style={inputBtnStyle}
          />
        </label>
        <button
          type="submit"
          id="submitBtn"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: ".8em",
            border: "10px solid white",
            fontSize: "1em",
            fontWeight: "bold",
            width:"100%"
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
