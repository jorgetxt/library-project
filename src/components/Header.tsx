interface HeaderProps {
  onButtonClick: () => void;
  number?: number;
}

const Header = ({ onButtonClick, number = 0 }: HeaderProps) => {
  return (
    <header className="sticky  z-50 top-0 w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <button
        className="flex items-center bg-transparent border border-transparent hover:border-white hover:text-white text-sm rounded-lg py-2 px-4"
        onClick={onButtonClick}
      >
        <svg
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        Libros seleccionados ({number})
      </button>
      {/* <h1 className="text-xl font-semibold">Librería</h1> */}
      <div></div>
    </header>
  );
};

export default Header;
