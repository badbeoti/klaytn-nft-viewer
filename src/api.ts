import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 60000,
});

export const getFpList = () => instance.get("/fp/list");

export const postFpListUpdate = () => instance.post("/fp/update");

export const getBalances = (wAdr: string) =>
  instance.get(`/tokens?address=${wAdr}`);
