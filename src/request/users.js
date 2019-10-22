import axios from "axios";
let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkN2I4ZmQ4NDZiNWZiMDAyZDFlM2ZmNSJ9.fnKR_ESQ_jaEBBKcKF228dfkgj1GTVTZdQTYYZ0Dihw";

// get Users
export function getUsers() {
  return axios
    .get(process.env.REACT_APP_API_URL + `/api/usersdemo/`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}

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

// upload file
export function uploadFile(data) {
  return axios
    .post(process.env.REACT_APP_API_URL + "/api/uploadfile/", data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}

// insert user
export function createUser(data) {
  return axios
    .post(process.env.REACT_APP_API_URL + "/api/usersdemo/", data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}

// update user
export function updateUser(data, userid) {
  return axios
    .put(process.env.REACT_APP_API_URL + "/api/usersdemo/" + userid, data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}

// delete user
export function deleteUser(data) {
  return axios
    .delete(process.env.REACT_APP_API_URL + "/api/usersdemo/" + data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}

//get user by id
export function getUser(id) {
  return axios
    .get(process.env.REACT_APP_API_URL + "/api/usersdemo/" + id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}
