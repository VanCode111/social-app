import axios from "axios";

const $host = axios.create({
  baseURL: "https://young-basin-78153.herokuapp.com/api/",
});

const $authHost = axios.create({
  baseURL: "https://young-basin-78153.herokuapp.com/api/",
});

const authIterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authIterceptor);

export { $host, $authHost };
