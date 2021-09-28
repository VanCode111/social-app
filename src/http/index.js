import axios from "axios";

const $host = axios.create({ baseURL: "http://localhost:5000/api/" });

const $authHost = axios.create({ baseURL: "http://localhost:5000/api/" });

const authIterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authIterceptor);

export { $host, $authHost };
