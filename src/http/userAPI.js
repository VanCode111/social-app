import { $host, $authHost } from "./index";

const registration = async ({ email, password, name, lastName }) => {
  const { data } = await $host.post("/registration", {
    email,
    password,
    name,
    lastName,
  });
  localStorage.setItem("token", data.accessToken);
  return data;
};

const login = async ({ email, password }) => {
  const { data } = await $host.post("/login", {
    email,
    password,
  });
  console.log(data.accessToken);
  localStorage.setItem("token", data.accessToken);
  return data;
};

const check = async () => {
  const { data } = await $authHost.get("/auth");
  console.log(data);
  return data;
};

export { registration, login, check };
