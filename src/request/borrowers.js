import axios from "axios";
// let token =
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkN2I4ZmQ4NDZiNWZiMDAyZDFlM2ZmNSJ9.fnKR_ESQ_jaEBBKcKF228dfkgj1GTVTZdQTYYZ0Dihw";

// insert user
export function getBorrowers() {
  return axios
    .get(process.env.REACT_APP_API_URL + `/api/borrowerdemo/`, {
      headers: {
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}

//get user by id
export function showBorrower(id) {
  return axios
    .get(process.env.REACT_APP_API_URL + "/api/borrowerdemo/" + id, {
      headers: {
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}

// insert user
export function createBorrower(data) {
  return axios
    .post(process.env.REACT_APP_API_URL + "/api/borrowerdemo/", data, {
      headers: {
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}

// update user
export function updateBorrower(data, userid) {
  return axios
    .put(process.env.REACT_APP_API_URL + "/api/borrowerdemo/" + userid, data, {
      headers: {
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}

// delete Borrower
export function deleteBorrower(data) {
  return axios
    .delete(process.env.REACT_APP_API_URL + "/api/borrowerdemo/" + data, {
      headers: {
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}
