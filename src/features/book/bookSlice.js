/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let url = `https://tiny-fawn-moccasins.cyclic.app/api/books/books`;

const initialState = {
  loading: false,
  books: [],
  error: "",
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addBook = createAsyncThunk(
  "books/addBook",
  async (newBookData) => {
    const response = await axios.post(url, newBookData);
    return response.data;
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId) => {
    await axios.delete(`${url}/${bookId}`);
    return bookId;
  }
);

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async ({ bookId, updatedBookData }) => {
    const response = await axios.put(`${url}/${bookId}`, updatedBookData);
    return response.data;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = "";
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.payload;
    });
    builder.addCase(addBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.loading = false;
      state.books = state.books.filter((book) => book.id !== action.payload);
      state.error = "";
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateBook.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(updateBook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default booksSlice.reducer;
