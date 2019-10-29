import axios from "axios";
let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkN2I4ZmQ4NDZiNWZiMDAyZDFlM2ZmNSJ9.fnKR_ESQ_jaEBBKcKF228dfkgj1GTVTZdQTYYZ0Dihw";

// insert user
export function createBorrower(data) {
  return axios
    .post(process.env.REACT_APP_API_URL + "/api/borrowerdemo/", data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}
