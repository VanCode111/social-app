import { Home, Auth } from "./pages";
import Comunity from "./pages/Comunity";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/registration",
    component: Auth,
  },
  {
    path: "/login",
    component: Auth,
  },
  {
    path: "/comunity",
    component: Comunity,
  },
];
