import { $host } from "./index";

const registration = async ({ email, password }) => {
  const { data } = await $host.post("/registration", {
    email,
    password,
  });
  return data;
};

const login = async ({ email, password }) => {
  const { data } = await $host.post("/login", {
    email,
    password,
  });
  console.log();
  return data;
};

export { registration, login };
