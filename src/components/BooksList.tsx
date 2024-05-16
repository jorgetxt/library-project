import { Library, Book as BookInterface } from "../interfaces/Books.interfaces";
import Book from "./Book";
import { motion } from "framer-motion";

interface BooksListProps {
  books?: Library[];
  isLoading: boolean;
}

const BooksList = ({ books, isLoading }: BooksListProps) => {
  return (
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
        : books?.map(({ book }) => (
            <motion.div layout key={book.ISBN}>
              <Book book={book} />
            </motion.div>
          ))}
    </div>
  );
};

export default BooksList;
