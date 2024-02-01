import { Link } from "react-router-dom";
import Navbar from "../NavBar";
import { HiEye } from "react-icons/hi";
const MainPage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo")) //locAL storagema string save hunxa so array ma change gareko
    : []; //map functionle khali aayo vane undefines error dinxa so array pass garna jasari ni empty arrray pass gareko
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <h3>Your Todo:</h3>

        {getTodo && getTodo.length > 0 ? (
          <>
            {getTodo.map((el, index) => (
              <>
                <div className="single_todo">
                  {el}

                  <div>
                    <Link to={`/view/${index}`}>
                      <HiEye size={"20px"} />
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </>
        ) : (
          <>
            <center>
              Nothing on your to-do. Please <Link to="/add">Add some</Link>
            </center>
          </>
        )}

        {/* <div className="single_todo">Todo 1</div>
        <div className="single_todo">Todo 2</div> */}
      </div>
    </>
  );
};
export default MainPage;
