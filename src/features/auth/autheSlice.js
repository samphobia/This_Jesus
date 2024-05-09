// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser } from './userSlice';

export const BASE_URL = "http://localhost:3002";

// Define initial state
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Async thunk action for user login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message); // Throw error message from backend
      }

      const data = await response.json();
      // const data = { user: { /* user data */ }, token: 'your_token_here' };
      // Dispatch registerUser action to update user state after login
      await dispatch(registerUser(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// Async thunk action for user logout
// export const logoutUser = createAsyncThunk(
//   'auth/logoutUser',
//   async (_, { rejectWithValue }) => {
//     try {
//       // Call logout endpoint or clear token from local storage
//       localStorage.removeItem('token');
//       return null;
//     // eslint-disable-next-line no-unreachable
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );




// Define auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.error = action.payload;
      })
  },
});

export default authSlice.reducer;
