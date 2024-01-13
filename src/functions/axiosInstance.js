import axios from "axios";
import { Cookie } from "next/font/google";

const ax = axios.create({
  baseURL: "https://az.pythonanywhere.com/",
  // baseURL: "https://jsonplaceholder.typicode.com",
  // headers: { "Access-Control-Allow-Origin": "*" },
  headers: { "content-type": "application/json" },
  withCredentials: true,
});

export default ax;
