import { useRef } from "react";
import Navbar from "../NavBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthCheck from "../../middleware/AuthCheck";

const AddToDo = () => {
  const todoText = useRef();
  const history = useHistory();

  //Auth check..
  AuthCheck();

  const addToDo = (e) => {
    e.preventDefault();
    const todoString = todoText.current.value; //input ko value todoString ma retrieve gareko
    //initialTodo is an array to save all the todos and localstorage ma store vako elements lai array ma rakheko.
    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    initialTodo.push(todoString);
    localStorage.setItem("todo", JSON.stringify(initialTodo));
    history.push("/");
  };
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <h1>Add to-do:</h1>
        <br></br>
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText}></input>
          <button>Save to-do</button>
        </form>
      </div>
    </>
  );
};
export default AddToDo;
