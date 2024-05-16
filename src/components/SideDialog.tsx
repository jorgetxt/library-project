interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: any;
}

const SideModal: React.FC<SideModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-gray-400 w-96 h-full p-6 shadow-xl fixed right-0 overflow-auto no-scrollbar"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onKeyDown={handleKeyDown}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 id="modal-title" className="text-xl font-semibold text-white">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
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
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideModal;
