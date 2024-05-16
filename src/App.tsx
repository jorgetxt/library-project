import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BooksScreen from "./components/BooksScreen";
import useGuardData from "./hooks/useGuardData";

const queryClient = new QueryClient();

function App() {
  useGuardData();
  return (
    <QueryClientProvider client={queryClient}>
      <BooksScreen />
    </QueryClientProvider>
  );
}

export default App;
