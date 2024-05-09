import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const BASE_URL = "http://localhost:3002";

// Define initial state
const initialState = {
  loading: false,
  error: null,
};

// Async thunk action for user logout
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/logout`, {
        method: 'POST', // Assuming your logout endpoint is a POST request
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token in the header
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message); // Throw error message from backend
      }

      return true; // Indicate successful logout
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define logout slice
const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default logoutSlice.reducer;
