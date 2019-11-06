import axios from "axios";

export default function(t) {
  const userobj = JSON.parse(localStorage.getItem("userDetails"));
  const token = t ? t : userobj.accesstoken;

  axios.defaults.baseURL = process.env.APP_API_URL;
  axios.defaults.headers.Authorization = `Bearer ${token}`;

  const errorHandler = error => {
    if (error.response && 401 === error.response.status) {
      localStorage.removeItem("token");
      return error.response.data.message == "Invalid Credentials"
        ? Promise.reject(error)
        : (window.location = "/");
    } else {
      return Promise.reject(error);
    }
  };

  axios.interceptors.response.use(response => response, errorHandler);
}
