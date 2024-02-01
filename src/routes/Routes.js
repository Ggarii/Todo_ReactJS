import { Route } from "react-router-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/ViewPage/ViewPage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" component={MainPage} exact={true}></Route>
        <Route path="/add" exact>
          <AddToDo />
        </Route>
        <Route path="/view/:id" component={ViewPage} exact></Route>
        <Route path="/login" component={Login}></Route>
        {/* nested routing use vako thauma exact use nagrne */}
        <Route path="*">
          {/*   *denotes mathi mention gareko bahek aru kunai path  */}
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
