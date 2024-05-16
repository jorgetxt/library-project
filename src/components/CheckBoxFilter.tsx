import { useMemo } from "react";
import { Library } from "../interfaces/Books.interfaces";
import CheckBox from "./CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setGenrerFilter } from "./../slices/BooksSlices";

interface Props {
  handleValue?: React.Dispatch<React.SetStateAction<string[] | null>>;
  books?: Library[];
}
const CheckBoxFilter = ({ books }: Props) => {
  const { genrerFilter } = useSelector((state: RootState) => state.books);

  const dispatch = useDispatch();

  const booksFilter = useMemo(() => {
    const genres = books?.map(({ book }) => book.genre);
    const clean = [...new Set(genres)];
    return clean;
  }, [books]);

  const handleValue = (key: string) => {
    if (genrerFilter.includes(key)) {
      const clean = genrerFilter.filter((item) => item !== key);
      dispatch(setGenrerFilter(clean));
    } else {
      dispatch(setGenrerFilter([...genrerFilter, key]));
    }
  };

  //   return <>{books.map(({ book }) => "hola")}</>;
  return (
    <>
      {booksFilter?.map((item) => (
        <div className="p-2">
          <CheckBox label={item} handleValue={handleValue} />
        </div>
      ))}
    </>
  );
};

export default CheckBoxFilter;
