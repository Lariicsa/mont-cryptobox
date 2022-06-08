import axios from "axios";
const API_URL = "http://api.bitso.com/v3/ticker/?book=btc_mxn";

const CONFIG = {
  "content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const API_SERVICE = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: CONFIG,
});

const getAltcoinPrice = () => API_SERVICE.get();

export { getAltcoinPrice };
