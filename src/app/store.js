// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/auth/userSlice';
import authReducer from '../features/auth/autheSlice';
import logoutReducer from '../features/auth/logoutSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    logout: logoutReducer,
  },
});

export default store
