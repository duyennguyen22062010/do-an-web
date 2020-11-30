import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

//AdminLayout
const AdminLayout = (props) => {
  return (
    <Fragment>
      <div>NAVBAR ADMIN</div>
      {props.children}
    </Fragment>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          // Truong hop da login
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          // Chua login
          return <Redirect to="/admin" />;
        }
      }}
    />
  );
}
