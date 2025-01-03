/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery, useDeleteBookMutation } from "./app/userApi.js";
import Navigations from "./Navigations";
import { useDispatch } from "react-redux";

export default function Account() {
  const { token, user } = useSelector((state) => state.userSlice);
  const [deleteBook] = useDeleteBookMutation();
  const dispatch = useDispatch();

  const check = () => {
    useEffect(() => {
      navigate("/login");
    }, []);
  };
  if (!token) check();
  if (token) {
    useGetUserQuery(token, { refetchOnMountOrArgChange: true });
  }
  const handleReturnBook = async (bookId) => {
    try {
      await deleteBook({ token: token, id: bookId });
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  return (
    token &&
    user && (
      <div>
        <Navigations />
        <div>
          <blockquote className="blockquote text-center">
            <p className="mb-2">
              Hi {user.firstname} {user.lastname}!
              <br />
              {user.email}
            </p>
          </blockquote>
        </div>
        <div className="bookBody">
          {!user.books.length && (
            <div style={{ display: "grid", justifyItems: "center" }}>
              <h1 className="display-3">No books checkout</h1>
            </div>
          )}
          {user.books.map((itm) => {
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
                  id={itm.id}
                  className="btn btn-danger"
                  onClick={() => handleReturnBook(itm.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
