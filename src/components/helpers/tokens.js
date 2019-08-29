const COOKIE_KEY = 'atToken='
export const setToken = (token) => {
  document.cookie = `${COOKIE_KEY}${token};max-age=172800;`
}

export const getToken = () => {
  let cookies = document.cookie.split(';')
  let authCookie = cookies.filter((cookie) => cookie.trim().startsWith(COOKIE_KEY))
  if(authCookie.length) {
    const token = authCookie[0].split('=')
    return token[1]
  }
}

export const clearToken = () => {
  document.cookie = COOKIE_KEY + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
