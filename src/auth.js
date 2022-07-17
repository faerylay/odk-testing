
const IS_LOGGED_IN = 'isLoggedIn'

export const rememberLogin = () => localStorage.setItem(IS_LOGGED_IN, '')

export const forgetLogin = () => localStorage.removeItem(IS_LOGGED_IN)

export const isLoggedIn = () => {
  if (localStorage.getItem("profile")) {
    return true
  }
  localStorage.removeItem(IS_LOGGED_IN)
  return false
}
