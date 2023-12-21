import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.106.220.49:5000/",
  // baseURL: "http://sureshzh.beget.tech/pravari/api/ApiCommonController",
});

export default instance;
