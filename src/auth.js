import jwt_decode from 'jwt-decode';

export const isLoggedIn = () => {
  if (localStorage.getItem("profile")) {
    return true
  }
  return false
}

export const userId = () => {
  const token = localStorage.getItem('profile')
  let decoded;
  if (token) {
    decoded = jwt_decode(token);
  }
  return decoded?._id
}