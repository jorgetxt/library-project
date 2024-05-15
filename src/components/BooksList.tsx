import Book from "./Book";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useMemo } from "react";
import booksQuerys from "../querys/booksQuerys";
import Test from "./Test";

const BooksList = () => {
  const { chosenBooks } = useSelector((state: RootState) => state.books);

  const { getBooksQuery } = booksQuerys();

  const { data } = getBooksQuery;

  const booksFilter = useMemo(
    () =>
      data?.default.library.filter(
        ({ book }) => !chosenBooks.some(({ ISBN }) => ISBN === book.ISBN)
      ),
    [data, chosenBooks]
  );

  return (
    <div
      className={chosenBooks.length ? "grid grid-cols-4" : " grid grid-cols-3"}
    >
      <div className="grid bg-slate-100 min-h-screen col-span-3 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-20 p-4">
        {booksFilter?.map(({ book }) => (
          <div key={book.ISBN}>
            <Book book={book} />
          </div>
        ))}
      </div>
      <div className="bg-slate-400 overflow-y-auto no-scrollbar">
        <Test books={chosenBooks} />
      </div>

      {/* {chosenBooks.length && (
        <div className="sticky top-0 right-0 col-span-1 h-screen overflow-y-auto p-10 bg-gray-400 no-scrollbar">
          {chosenBooks?.map((book, index) => (
            <div key={book.ISBN} className="">
              <Book {...{ index, book }} isChoosenList />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default BooksList;
