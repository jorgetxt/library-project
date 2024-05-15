import { Book as BookInterface } from "../interfaces/Books.interfaces";
import useSaveChosenBooks from "../hooks/useSaveChosenBooks";

interface Props {
  book: BookInterface;
  isChoosenList?: boolean;
}

const Book = ({ book, isChoosenList }: Props) => {
  const { removeBook, setChosenBook } = useSaveChosenBooks();

  const handleAction = () => {
    if (isChoosenList) {
      removeBook(book);
    } else {
      setChosenBook(book);
    }
  };

  const { ISBN, author, cover, genre, pages, synopsis, title, year } = book;
  return (
    <div
      className="min-h-28  flex items-center justify-center"
      onClick={handleAction}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
        <div className="p-4">
          <span className="bg-red-500 py-1 px-1 text-sm font-semibold text-white rounded-full ">
            {genre}
          </span>
          <h1 className="mt-4 text-lg font-bold h">{title}</h1>
          <p className="mt-2 font-sans text-gray-700">{author.name}</p>
        </div>
        <div className="relative">
          <img className="max-w-50" src={cover} />
          <p className="absolute text-lg transform translate-x-20 -translate-y-24 bg-blue-600 text-white py-3 px-6 rounded-full "></p>
        </div>
      </div>
    </div>
  );
};

export default Book;
