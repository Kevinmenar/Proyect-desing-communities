import Cookies from 'universal-cookie';

const cookies = new Cookies();

const getCookie = (key) => {
  //return cookies.get(key);
  return true;
}

const setCookie = (key, value, option) => {
  cookies.set(key, value, option);
}

const removeCookie = (key) => {
  cookies.remove(key);
}

export default {getCookie, setCookie, removeCookie}