import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AuthCheck = () => {
  const history = useHistory();

  if (localStorage.getItem("loggedIn")) {
    //Do nothing..
  } else {
    history.replace("/login");
  }

  //   This code can also be written as ..
  //   !localStorage.getItem("loggedIn") && history.replace("/login");
  //   Or,
  //     localStorage.getItem("loggedIn") ? (() => {})() : history.replace("/login");

  //return is not necessary as it is a functionality. If it is a component then it is necessary.
};
export default AuthCheck;
