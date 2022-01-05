import axios from "axios";
import { HOST } from "../constant/Host";
axios.defaults.baseURL = HOST;
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    
  }
);
const getConfig = () => {
  const token = localStorage.getItem("TOKEN");
  if (token) {
    console.log("true")
    return {
      headers: {
        "Content-type": "Application/json",
        "X-HANASHOP-ACCESS-TOKEN":token,
      },
    };
  }else{
    console.log("false")
    return {
      headers: {
        "Content-type": "Application/json",
      },
    }
  }
};
const request = {
  get: (url) => axios.get(url,getConfig()),
  post: (url, data) => axios.post(url, data, getConfig()),
  put: (url, data) => axios.put(url, data, getConfig()),
  delete: (url) => axios.delete(url,getConfig()),
};

export default request;
