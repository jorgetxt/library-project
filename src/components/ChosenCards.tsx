// src/components/OverlayCards.js
import { useState } from "react";
import { Book as BookInterface } from "../interfaces/Books.interfaces";
import Book from "./Book";
import useSaveChosenBooks from "../hooks/useSaveChosenBooks";

interface Props {
  books: BookInterface[];
}

const ChosenCards = ({ books }: Props) => {
  const { removeBook } = useSaveChosenBooks();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (id: string | null) => {
    if (id === selectedCard) {
      setSelectedCard(null);
    } else {
      setSelectedCard(id);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center mt-10">
      {books.map((card, index) => (
        <div
          key={card.ISBN}
          className={`absolute w-64 p-4 bg-slate-800 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out cursor-pointer ${
            selectedCard === card.ISBN
              ? "translate-y-6 z-20 scale-105 bg-gradient-to-t from-slate-800 to-slate-600 "
              : "scale-100"
          } hover:-translate-y-2`}
          style={{
            top: `${index * 60}px`,
          }}
          onClick={() => handleCardClick(card.ISBN)}
        >
          <div className="flex justify-between items-center mb-0">
            <h2 className="text-xl font-bold mb-2 text-white">{card.title}</h2>
            <button
              onClick={() => removeBook(card)}
              className="text-gray-300 hover:text-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-white">{card.synopsis}</p>
          <Book book={card} isChoosenList />
        </div>
      ))}
    </div>
  );
};

export default ChosenCards;
