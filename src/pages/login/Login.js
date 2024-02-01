import { Link, useHistory } from "react-router-dom";
import Navbar from "../NavBar";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
const Login = () => {
  const history = useHistory();
  return (
    <>
      <Navbar />
      <div className="todo_container">
        {localStorage.getItem("loggedIn") ? (
          <>
            You are already logged in!
            <br />
            <b
              onClick={() => {
                localStorage.removeItem("loggedIn");
                history.push("/");
              }}
              style={{ color: "red", cursor: "pointer" }}
            >
              Logout
            </b>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                alert("You are successfully logged in!");
                history.replace("/");
                localStorage.setItem("loggedIn", true);
              }}
            >
              Login
            </button>
            <br /> <br />
            {/* Nested routing */}
            <Link to="login/showInfo">Nested Rote |Show Information</Link>
            <br /> <br />
            <Route path="/login/showInfo">
              <div>This is dummy login.</div>
            </Route>
            {/* Nested Routing ends!-- */}
          </>
        )}
      </div>
    </>
  );
};
export default Login;
