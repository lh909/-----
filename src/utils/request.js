import axios from "axios";
import { Toast } from "vant";
axios.defaults.headers.get["Content-Type"] =
  "application/x-www-form-urlencoded";
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    Toast.loading({
      message: "数据加载中...",
      forbidClick: true,
    });
    config.headers = {
      token: sessionStorage.getItem("token"),
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    Toast.clear();
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default axios;
