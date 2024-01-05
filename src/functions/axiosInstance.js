import axios from "axios";

const ax = axios.create({
  baseURL: "http://localhost:5288/api/",
  headers: { "Access-Control-Allow-Origin": "*" },
});

export default ax;
