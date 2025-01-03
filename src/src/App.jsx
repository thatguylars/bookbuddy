import Books from "./components/Books";
import { useGetAllBooksQuery } from "./components/app/booksApi";

function App() {
  const { isLoading } = useGetAllBooksQuery();

  return <div>{isLoading ? <h1>Loading...</h1> : <Books />}</div>;
}

export default App;
