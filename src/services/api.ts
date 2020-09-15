import axios from "axios";

const api = axios.create({
  baseURL: "https://fortniteapi.io/v1",
});

export default api;
