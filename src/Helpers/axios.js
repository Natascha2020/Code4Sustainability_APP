import axios from "axios";

const axiosInstance = axios.create({
  validateStatus: () => true,
  withCredentials: "include",
});

export default axiosInstance;
