import { useMemo, useState } from "react";
import { Library, Book as BookInterface } from "../interfaces/Books.interfaces";
import Book from "./Book";
import { motion } from "framer-motion";
import Input from "./Input";
import CheckBoxFilter from "./CheckBoxFilter";

interface BooksListProps {
  books?: Library[];
  booksAll?: Library[];
  isLoading: boolean;
}

const BooksList = ({ books, booksAll, isLoading }: BooksListProps) => {
  const [search, setSearch] = useState<null | string>(null);

  const booksFilter = useMemo(() => {
    if (search) {
      return books?.filter(({ book }) =>
        book.title.toLowerCase().includes(search)
      );
    } else {
      return books;
    }
  }, [search, books]);

  return (
    <>
      <div className="bg-gray-600  p-4">
        <div className="grid grid-cols-3 col-span-3">
          <div>
            <Input label="Busqueda" handleValue={setSearch} />
          </div>
          <div className="flex items-start p-2 items-center">
            <CheckBoxFilter books={booksAll} />
          </div>
        </div>
      </div>

      <div className="min-h-screen">
        <div className="grid h-min  col-span-3 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6  gap-20 p-4">
          {isLoading
            ? Array.from(new Array(12)).map(() => (
                <Book
                  book={
                    {
                      cover:
                        "https://img.freepik.com/foto-gratis/fondo-diseno-textura-simple-blanco_53876-128555.jpg",
                    } as BookInterface
                  }
                />
              ))
            : booksFilter?.map(({ book }) => (
                <motion.div layout key={book.ISBN}>
                  <Book book={book} />
                </motion.div>
              ))}
        </div>
      </div>
    </>
  );
};

export default BooksList;
