import axios from "axios";
let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkN2I4ZmQ4NDZiNWZiMDAyZDFlM2ZmNSJ9.fnKR_ESQ_jaEBBKcKF228dfkgj1GTVTZdQTYYZ0Dihw";

// state api
export function getStates() {
  return axios
    .get(process.env.REACT_APP_API_URL + `/api/state/`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}

// city api
export function getCity(stateid) {
  return axios.get(process.env.REACT_APP_API_URL + `/api/city/` + stateid, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  });
}
