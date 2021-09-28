import { $host } from "./index";

const findObjects = async ({ subString }) => {
  const { data } = await $host.post("/findObjects", {
    subString,
  });
  return data;
};

export { findObjects };
