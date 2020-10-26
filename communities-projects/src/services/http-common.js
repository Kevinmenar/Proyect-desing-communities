import axios from "axios";

const prodConfig = {
  apiDomain: process.env.PROD_URL,
};
 
const devConfig = {
  apiDomain: process.env.API_URL,
};
 
const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default axios.create({
  baseURL: config,
  headers: {
    "Content-type": "application/json"
  }
});