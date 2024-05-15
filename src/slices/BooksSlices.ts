import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../interfaces/Books.interfaces";

export interface BooksState {
  chosenBooks: Book[];
}

const initialState: BooksState = {
  chosenBooks: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setChosenBooks: (state, action: PayloadAction<Book[]>) => {
      state.chosenBooks = action.payload;
    },
  },
});

export const { setChosenBooks } = booksSlice.actions;

export default booksSlice.reducer;
