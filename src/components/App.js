import "../App.css";
import { useEffect, useState } from "react";
import * as bookAPI from "../BooksAPI"
import BooksList from "./booksList";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./searchBooks";
import NotFound from "./notFound";
function App() {

  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const res = await bookAPI.getAll();
    setBooks(res)
  }
  useEffect(() => {
    getAllBooks()
  }, [])

  const updateShelf = async (book, shelf) => {
    await bookAPI.update(book, shelf);
    getAllBooks()
  }

  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          exact
          path="/"
          element={<BooksList handleUpdateShelf={updateShelf} books={books} />}
        />
        <Route
          path="/search"
          element={<SearchBooks handleUpdateShelf={updateShelf} />}
        />
      </Routes>

    </div>
  );
}

export default App;
