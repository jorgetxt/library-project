import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../interfaces/Books.interfaces";

export interface BooksState {
  chosenBooks: Book[];
  genrerFilter: string[];
}

const initialState: BooksState = {
  chosenBooks: [],
  genrerFilter: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setChosenBooks: (state, action: PayloadAction<Book[]>) => {
      state.chosenBooks = action.payload;
    },
    setGenrerFilter: (state, action: PayloadAction<string[]>) => {
      state.genrerFilter = action.payload;
    },
  },
});

export const { setChosenBooks, setGenrerFilter } = booksSlice.actions;

export default booksSlice.reducer;
