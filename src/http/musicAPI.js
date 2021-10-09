import { $host } from "./index";

const getMusic = async () => {
  const { data } = await $host.get("/getmusic", {});
  return data;
};

export { getMusic };
