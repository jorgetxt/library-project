import { useQuery } from "@tanstack/react-query";
import { BooksResponse } from "../interfaces/Books.interfaces";
import Book from "./Book";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useMemo } from "react";

const BooksList = () => {
  const { chosenBooks } = useSelector((state: RootState) => state.books);

  const getBooks = async () => {
    const res = await fetch(
      "https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev"
    );
    return res.json();
  };
  const { data } = useQuery<BooksResponse>({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  const booksFilter = useMemo(
    () =>
      data?.default.library.filter(
        ({ book }) => !chosenBooks.some(({ ISBN }) => ISBN === book.ISBN)
      ),
    [data, chosenBooks]
  );

  return (
    <div
      className={chosenBooks.length ? "grid grid-cols-4" : "grid grid-cols-3"}
    >
      <div className="grid col-span-3 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6  gap-20 m-4">
        {booksFilter?.map(({ book }) => (
          <div key={book.ISBN}>
            <Book book={book} />
          </div>
        ))}
      </div>
      {chosenBooks.length && (
        <div className="col-span-1 p-10 bg-gray-400">
          {chosenBooks?.map((book) => (
            <div key={book.ISBN} className="min-w-0 max-w-md">
              <Book book={book} isChoosenList />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksList;
