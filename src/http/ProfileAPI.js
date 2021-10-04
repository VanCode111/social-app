import { $host, $authHost } from "./index";

const uploadImage = async (img) => {
  const { data } = await $host.post("/uploadimage", img);
  return data;
};

const createPost = async (formData) => {
  const { data } = await $host.post("/createpost", formData);
  return data;
};

const getProfilePosts = async ({ userId }) => {
  const { data } = await $host.post("/getuserposts", {
    userId,
  });
  return data;
};

const deletePost = async ({ postId }) => {
  const { data } = await $authHost.post("/deletepost", { postId });
  return data;
};

export { uploadImage, createPost, getProfilePosts, deletePost };
