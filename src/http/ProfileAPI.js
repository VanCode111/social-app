import { $host } from "./index";

const uploadImage = async (img) => {
  const { data } = await $host.post("/uploadimage", img);
  return data;
};

export { uploadImage };
