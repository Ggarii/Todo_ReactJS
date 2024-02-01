import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../NavBar";
import AuthCheckBoolean from "../../middleware/AuthCheckBoolean";

const ViewPage = () => {
  const history = useHistory();
  const getParams = useParams();
  const getId = getParams.id;
  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  const getData = getStorage[getId];

  // For Query parse...
  // const getLocation = useLocation();
  // const getURLParams = new URLSearchParams(getLocation.search); //URLSearchParams le stringlai(query) url ma parse garchha
  // const getId = getURLParams.get("id");
  // console.log(getId);
  // const getData = getStorage[getId];

  const goback = () => {
    history.push("/");
  };

  const deleteTodo = () => {
    getStorage.splice(getId, 1); //array.splice()is a JS function which removes arrray element. splice(index,kati ota element delete garne tya bata)
    localStorage.setItem("todo", JSON.stringify(getStorage));
    history.replace("/");
  };
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <button
          onClick={goback}
          style={{ background: "#e7e7e7", color: "#666" }}
        >
          Go Back
        </button>
        <div
          style={{
            background: "#e7e7e7",
            padding: "20px",
            fontSize: "20px",
            margin: "20px",
          }}
        >
          {getData}
        </div>
        {AuthCheckBoolean() ? (
          <>
            <button style={{ background: "red" }} onClick={deleteTodo}>
              {" "}
              Delete Todo
            </button>
          </>
        ) : (
          <>
            <p>
              Login to see more options. <Link to="/login">Login now</Link>
            </p>
          </>
        )}
      </div>

      {/* onclick{()=>{ history.push("/");}} esari use garna ni milxa in line no.14 junlai anonymous function vanxa */}
    </>
  );
};
export default ViewPage;
