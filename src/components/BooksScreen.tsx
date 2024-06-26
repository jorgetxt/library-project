import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useMemo, useState } from "react";
import booksQuerys from "../querys/booksQuerys";
import ChosenCards from "./ChosenCards";
import SideDialog from "./SideDialog";
import useMedia from "use-media";
import Header from "./Header";
import BooksList from "./BooksList";

const BookScreen = () => {
  const { chosenBooks, genrerFilter } = useSelector(
    (state: RootState) => state.books
  );

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const isMediumScreen = useMedia({ maxWidth: "1000px" });

  const { getBooksQuery } = booksQuerys();

  const { data, isFetching } = getBooksQuery;

  const booksFilter = useMemo(() => {
    let filter = data?.default.library.filter(
      ({ book }) => !chosenBooks.some(({ ISBN }) => ISBN === book.ISBN)
    );

    if (genrerFilter.length) {
      filter = filter?.filter(({ book }) => genrerFilter.includes(book.genre));
    }
    return filter;
  }, [data, chosenBooks, genrerFilter]);

  return (
    <>
      {isMediumScreen && (
        <Header
          onButtonClick={() => setModalOpen(true)}
          number={chosenBooks.length}
        />
      )}
      <div
        className={
          chosenBooks.length && !isMediumScreen
            ? "grid grid-cols-4"
            : "grid grid-cols-3"
        }
      >
        <div
          className="grid col-span-3 bg-gradient-to-t
          from-gray-400 to-slate-100 min-h-screen"
        >
          <BooksList
            books={booksFilter}
            booksAll={data?.default.library}
            isLoading={isFetching}
          />
        </div>
        {!isMediumScreen && !!chosenBooks.length && (
          <div
            className="sticky top-0 right-0 col-span-1 h-screen overflow-y-auto p-10 bg-gradient-to-t
          from-gray-700 to-gray-400 no-scrollbar"
          >
            <ChosenCards books={chosenBooks} />
          </div>
        )}

        <SideDialog
          title="Libros seleccionados"
          isOpen={modalOpen && isMediumScreen}
          onClose={() => setModalOpen(false)}
        >
          <ChosenCards books={chosenBooks} />
        </SideDialog>
      </div>
    </>
  );
};

export default BookScreen;
