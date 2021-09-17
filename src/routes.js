import Feeds from "./components/Feeds/Feeds";
import Profile from "./components/Profile/Profile";
import { Auth, Main } from "./pages";
import Comunity from "./pages/Comunity";

export const routes = [
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
  {
    path: "/feeds",
    component: Main,
  },
  {
    path: "/profile",
    component: Main,
  },
];

export const mainRoutes = [
  {
    path: "/feeds",
    component: Feeds,
  },
  {
    path: "/profile",
    component: Profile,
  },
];
