import axios from "axios";

const axiosInstance = axios.create({
  validateStatus: () => true,
  withCredentials: true,
});

export default axiosInstance;
