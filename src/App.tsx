import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BooksList from "./components/BooksList";
import useGuardData from "./hooks/useGuardData";

const queryClient = new QueryClient();

function App() {
  useGuardData();
  return (
    <QueryClientProvider client={queryClient}>
      <BooksList />
    </QueryClientProvider>
  );
}

export default App;
