import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.js";
import { routesAdmin, routesHome } from "./routes.js";
import AdminPage from "./screens/Admin/admin-page/AdminPage.js";
import AdminTemplate from "./templates/AdminTemplate.js";

import Login from "./screens/User/login/Login.js";
import SignUp from "./screens/User/sign-up/SignUp.js";
import Checkout from "./screens/User/checkout/Checkout.js";
import HomeTemplate from "./screens/User/homepage/HomeTemplate.js";
import { useSelector } from "react-redux";
import Dashboard from "./screens/Admin/dashboard/Dashboard.js";
import DasboardMovie from "./screens/Admin/dashboard/DasboardMovie";
import AuthRoute from "./AuthRoute.js";
import store from "./redux/store/index";
import { LOGIN_ADMIN, LOG_OUT } from "./constants/ActionType.js";

const token = localStorage.UserAdmin;
// const state = store.getState();
if (token) {
  store.dispatch({
    type: LOGIN_ADMIN,
  });
} else {
  store.dispatch({
    type: LOG_OUT,
  });
}
// const authenticated = state.adminReducer.authenticated
function App() {
  const authenticated = useSelector(
    (state) => state.adminReducer.authenticated
  );
  console.log("authenticated :>> ", authenticated);
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  const showMenuAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          {showMenuHome(routesHome)}
          {showMenuAdmin(routesAdmin)}

          {/* Trang Admin - Login */}
          <Route path="/admin" component={AdminPage} />
          <AuthRoute
            exact
            path="/dashboard"
            authenticated={authenticated}
            component={Dashboard}
          />
          <AuthRoute
            path="/dashboard/movies"
            authenticated={authenticated}
            component={DasboardMovie}
          />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/checkout/:id" component={Checkout} />

          <Route path="" component={PageNotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
