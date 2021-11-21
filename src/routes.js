import Feeds from "./components/Feeds/Feeds";
import { Main } from "./pages";
import Comunity from "./pages/Comunity";
import Auth from "./pages/Auth/Auth";
import Music from "./components/Music/Music";
import Messenger from "./pages/Messenger/Messenger";

export const routes = [
  {
    path: "/",
    component: Auth,
  },
];

export const authRoutes = [
  {
    path: "/profile",
    component: Main,
  },
  {
    path: "/messenger",
    component: Messenger,
    layout: Main,
  },
  {
    path: "/messenger/:id",
    component: Messenger,
    layout: Main,
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

  {
    path: "/messenger/:id",
    component: Messenger,
  },
];
