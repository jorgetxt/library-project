import { Book as BookInterface } from "../interfaces/Books.interfaces";
import useSaveChosenBooks from "../hooks/useSaveChosenBooks";

interface Props {
  book: BookInterface;
  isChoosenList?: boolean;
}

const Book = ({ book, isChoosenList }: Props) => {
  const { setChosenBook } = useSaveChosenBooks();

  const handleAction = () => {
    if (!isChoosenList) {
      setChosenBook(book);
    }
  };

  const { cover } = book;
  return (
    <div className={`flex items-center justify-center`} onClick={handleAction}>
      <div
        className={
          !isChoosenList
            ? "bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer"
            : ""
        }
      >
        <div className="relative">
          <img className="max-h-80 object-cover" src={cover} />
        </div>
      </div>
    </div>
  );
};

export default Book;
