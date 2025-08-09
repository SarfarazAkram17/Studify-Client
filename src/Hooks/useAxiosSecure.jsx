import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://studify-sarfaraz-akram.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logOutUser } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        logOutUser()
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
