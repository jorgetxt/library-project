import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setChosenBooks } from "../slices/BooksSlices";

const useGuardData = () => {
  const dispatch = useDispatch();

  const { chosenBooks: chooseBooks } = useSelector(
    (state: RootState) => state.books
  );

  useEffect(() => {
    const storageList = localStorage.getItem("chosenBooks");
    if (JSON.parse(storageList || "[]").length && !chooseBooks.length) {
      dispatch(setChosenBooks(JSON.parse(storageList || "[]")));
    }
  }, [chooseBooks]);
};

export default useGuardData;
