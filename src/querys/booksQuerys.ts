import { useQuery } from "@tanstack/react-query";

import { BooksResponse } from "../interfaces/Books.interfaces";

const booksQuerys = () => {
  /**
   * @GET
   * @returns Books:BooksResponse
   */
  const getBooks = async () => {
    const res = await fetch(
      "https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev"
    );
    return res.json();
  };
  const getBooksQuery = useQuery<BooksResponse>({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  return { getBooksQuery };
};

export default booksQuerys;
