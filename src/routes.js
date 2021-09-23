import Feeds from "./components/Feeds/Feeds";
import Profile from "./components/Profile/Profile";
import { Main } from "./pages";
import Comunity from "./pages/Comunity";
import Auth from "./pages/Auth/Auth";
import Music from "./components/Music/Music";

export const routes = [
  {
    path: "/",
    component: Auth,
  },
];

export const authRoutes = [
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
    component: Music,
  },
];
