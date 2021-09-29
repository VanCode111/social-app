import { $host } from "./index";

const uploadImage = async (img) => {
  const { data } = await $host.post("/uploadimage", img);
  return data;
};

const createPost = async ({ userId, text }) => {
  const { data } = await $host.post("/createpost", {
    userId,
    text,
  });
  return data;
};

const getProfilePosts = async ({ userId }) => {
  const { data } = await $host.post("/getuserposts", {
    userId,
  });
  return data;
};

export { uploadImage, createPost, getProfilePosts };
