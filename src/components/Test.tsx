// src/components/OverlayCards.js
import { useState } from "react";
import { Book as BookInterface } from "../interfaces/Books.interfaces";
import Book from "./Book";

interface Props {
  books: BookInterface[];
}

const OverlayCards = ({ books }: Props) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (id: string | null) => {
    if (id === selectedCard) {
      setSelectedCard(null);
    } else {
      setSelectedCard(id);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center mt-16">
      {books.map((card, index) => (
        <div
          key={card.ISBN}
          className={`absolute w-64 p-4 bg-slate-800 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out cursor-pointer ${
            selectedCard === card.ISBN
              ? "translate-y-6 z-20 scale-105"
              : "scale-100"
          } hover:-translate-y-2`}
          style={{
            top: `${index * 60}px`,
          }}
          onClick={() => handleCardClick(card.ISBN)}
        >
          <h2 className="text-xl font-bold mb-2 text-white">{card.title}</h2>
          <p className="text-white">{card.synopsis}</p>
          <Book book={card} isChoosenList />
        </div>
      ))}
    </div>
  );
};

export default OverlayCards;
