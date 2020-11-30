// import Dashboard from "./screens/Admin/dashboard/Dashboard";
// import DasboardMovie from "./screens/Admin/dashboard/DasboardMovie";

// import ThemNguoiDung from "./screens/Admin/them-nguoi-dung/ThemNguoiDung";

import DetailMovie from "./screens/User/detail-movie/DetailMovie";
import HomePage from "./screens/User/homepage/HomePage";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/home-list-movie",
    exact: true,
    component: HomePage,
    scroll: "listMovie",
  },
  {
    path: "/home-group-cinema",
    exact: true,
    component: HomePage,
    scroll: "groupCinema",
  },
  {
    path: "/home-app",
    exact: true,
    component: HomePage,
    scroll: "app",
  },
  {
    path: "/detail/:id",
    exact: false,
    component: DetailMovie,
  },
];

const routesAdmin = [
  // {
  //   path: "/admin/dashboard",
  //   exact: true,
  //   component: Dashboard,
  // },
  // {
  //   path: "/dashboard/movies",
  //   exact: false,
  //   component: DasboardMovie,
  // },
];

export { routesHome, routesAdmin };
