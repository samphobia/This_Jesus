import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
// import applicantReducer from "../features/Applicants/applicantSlice";
import booksReducer from "../features/book/bookSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // applicants: applicantReducer,
    books: booksReducer,
  },
});

export default store;
