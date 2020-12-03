import axios from "axios";

const axiosInstance = axios.create({
  validateStatus: () => true,
  withCredentials: "include",
  crossDomain: true,
});

export default axiosInstance;
