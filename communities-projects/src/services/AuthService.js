import http from "./http-common";

const doUserLogin = (data) => {
  return http.post("/login", data);
}

const handleLoginSuccess = (response, remember) => {
  
}
export default {doUserLogin, handleLoginSuccess};
