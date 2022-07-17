import * as api from '../api';
import { auth } from '../redux'
export const signIn = (username, password, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(username.value, password.value);
    dispatch(auth(data));
    if (data) {
      navigate('/profile');
    }
  } catch (error) {
    console.log(error);
  }
};


export const signup = (formData, router) => async (dispatch) => {
  // try {
  //   const { data } = await api.signUp(formData);

  //   dispatch({ type: AUTH, data });

  //   router.push('/');
  // } catch (error) {
  //   console.log(error);
  // }
};


