import { COOKIE_DEFAULT_CONFIG } from '@/config';

const cookieKey = COOKIE_DEFAULT_CONFIG.TOKEN;

/**
 * 获取Token
 * @param name 
 */
export function getCookie(name: string = cookieKey) {
  return localStorage.getItem(name);
}

/**
 * 设置Token
 * @param name 
 */
export function setCookie(name: string = cookieKey, value: string) {
  return localStorage.setItem(name, value);
}

/**
 * 删除Token
 * @param name 
 */
export function removeCookie(name: string = cookieKey) {
  return localStorage.removeItem(name);
}