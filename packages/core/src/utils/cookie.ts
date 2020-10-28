import Cookies from 'js-cookie';
import { COOKIE_DEFAULT_CONFIG } from '@/config';

const cookieKey = COOKIE_DEFAULT_CONFIG.TOKEN;

/**
 * 获取Token
 * @param name 
 */
export function getCookie(name: string = cookieKey) {
  return Cookies.get(name);
}

/**
 * 设置Token
 * @param name 
 */
export function setCookie(name: string = cookieKey, value: string | object) {
  return Cookies.set(name, value);
}

/**
 * 删除Token
 * @param name 
 */
export function removeCookie(name: string = cookieKey) {
  return Cookies.remove(name);
}

export function clearAllCookie() {
  const keys = document.cookie.match(/[^ =;]+(?=\=)/g) || [];
  keys.forEach((item) => {
    removeCookie(item);
  });
}
