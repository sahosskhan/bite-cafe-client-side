import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/'
})
const useAxiosSecure= () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }),
    (err) => {
      return Promise.reject(err);
    };
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
    return axiosSecure;
};

export default useAxiosSecure;