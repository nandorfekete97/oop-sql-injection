import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import "./App.css";

const fetchBooks = async (searchQuery) => {
  const response = await fetch(
    `http://localhost:5038/api/books?search=${encodeURIComponent(searchQuery)}`
  );
  if (response.status !== 200) {
    throw new Error("Error fetching books: " + response.statusText);
  } else {
    const data = await response.json();
    return data;
  }
};

function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchBooks(searchQuery)
      .then((books) => {
        setBooks(books);
        setError(false);
      })
      .catch(() => {
        console.error("Error fetching books");
        setBooks([]);
        setError(true);
      });
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      {error ? (
        <ErrorPage />
      ) : (
        <div className="App">
          <h1>Bookshelf</h1>
          <input
            type="text"
            placeholder="Search by author or title"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Published Date</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{new Date(book.publishedDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
