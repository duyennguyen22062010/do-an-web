import React, { Fragment } from "react";
import { Route } from "react-router-dom";
// import Navbar from "../../../components/User/Navbar/Navbar.js";
// import Footer from "../screens/User/homepage/Footer/Footer.js";

const HomeLayout = (props) => {
  return (
    <Fragment>
      {/* <Navbar hs.children.props.hisistory={proptory} /> */}
      {props.children}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} scroll={props.scroll} />
          </HomeLayout>
        );
      }}
    />
  );
}
