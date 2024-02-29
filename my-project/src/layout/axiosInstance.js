import axios from "axios";

export const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: { "X-Custom-Header": "foobar" },
});
