//import axios from "axios";
import BASE_URLS from "../../config.js";

 const BASE_PROD_URL = BASE_URLS.urls.PROD_URL;
 const BASE_DEV_URL = BASE_URLS.urls.LOCAL_URL;

const CONFIG = {
  "content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export { BASE_PROD_URL,  BASE_DEV_URL };
