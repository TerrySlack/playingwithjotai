import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.publicapis.org/",
  timeout: 1000,
  //headers: { "X-Custom-Header": "foobar" },
});

const { get: axiosGet, post } = axios;

const get = (url: string, params?: any) => {
  return axiosGet(url, params).then(({ data }) => data);
};
export { get, post };
