import axios from "axios";

const ax = axios.create({
  baseURL: "https://az.pythonanywhere.com/",
  headers: { "content-type": "application/json" },
  withCredentials: true,
});

export default ax;
