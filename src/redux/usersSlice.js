import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: null
}

export const usersSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        return {
          ...state,
          user: action.payload,
        }
      }
    },
    auth: {
      reducer(state, action) {
        const { token, user } = action.payload
        localStorage.setItem('profile', token);
        // state.user = action.payload.user
        return {
          ...state,
          token,
          user: user
        };
      }
    },
    authLogout: {
      reducer(state, action) {
        localStorage.clear();
        return {
          ...state,
          user: null
        };
      }
    }
  }
})
export const { addUser, auth, authLogout } = usersSlice.actions;
export default usersSlice.reducer