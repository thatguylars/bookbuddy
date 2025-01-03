/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUpdateBookMutation } from "./app/booksApi";
import Navigations from "./Navigations";

export default function Books() {
  const { books } = useSelector((state) => state.bookSlice);
  const { token } = useSelector((state) => state.userSlice);
  const [updateBook] = useUpdateBookMutation();
  const [filteredData, setFilteredData] = useState(books);
  const navigate = useNavigate();

  /* Targets input values and displays books that match input to title */
  const filterBooks = (e) => {
    setFilteredData(
      books.filter((book) =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };
  /* Filters book that are available to checkout and updates its API, only accessible when authenticated with token */
  const checkoutBook = async (e) => {
    const availability = {
      id: e.target.name,
      token: token,
      body: { available: false },
    };
    const result = await updateBook(availability);
    setFilteredData(
      books.map((book) => {
        return result.data.book.id === book.id
          ? { ...book, available: result.data.book.available }
          : book;
      }),
    );
  };
  return (
    <div>
      <Navigations />
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Book"
          onChange={filterBooks}
        />
      </div>
      <div className="books">
        {filteredData.map((itm) => {
          return (
            <div key={itm.id} className="card">
              <img
                src={itm.coverimage}
                className="card-img-top"
                alt={itm.title}
              />
              <div className="card-body">
                <h5 className="card-title">{itm.title}</h5>
                <p className="card-text">{itm.author}</p>
                <p className="card-text">ID: {itm.id}</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate(`/book/${itm.id}`);
                }}
              >
                See Details
              </button>{" "}
              {itm.available && token && (
                <button
                  name={itm.id}
                  className="btn btn-success"
                  onClick={checkoutBook}
                >
                  Checkout
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
