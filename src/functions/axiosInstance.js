import axios from "axios";

const ax = axios.create({
  baseURL: "https://az.pythonanywhere.com/",
  // baseURL: "https://jsonplaceholder.typicode.com",
  // headers: { "Access-Control-Allow-Origin": "*" },
  headers: { "content-type": "application/json" },
});

export default ax;
