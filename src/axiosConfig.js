import axios from "axios";

const instance = axios.create({
  baseURL: "http://54.252.242.121:5000/",
  // baseURL: "http://sureshzh.beget.tech/pravari/api/ApiCommonController",
});

export default instance;
