import { $host } from "./index";

const getPageByLink = async ({ link }) => {
  console.log(link);
  const { data } = await $host.post("/dynamic", {
    link,
  });
  return data;
};

export { getPageByLink };
