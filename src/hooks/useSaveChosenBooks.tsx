import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Book } from "../interfaces/Books.interfaces";
import { setChosenBooks } from "../slices/BooksSlices";

const useSaveChosenBooks = () => {
  const dispatch = useDispatch();

  const { chosenBooks } = useSelector((state: RootState) => state.books);

  const saveData = (Books: Book[]) => {
    dispatch(setChosenBooks(Books));
    localStorage.setItem("chosenBooks", JSON.stringify(Books));
  };

  const setChosenBook = (book: Book) => {
    const chosenBooksNew = [...chosenBooks, book];
    saveData(chosenBooksNew);
  };

  const removeBook = (book: Book) => {
    const chosenBooksNew = chosenBooks.filter((e) => !(e.ISBN === book.ISBN));
    saveData(chosenBooksNew);
  };

  return { setChosenBook, removeBook };
};

export default useSaveChosenBooks;
