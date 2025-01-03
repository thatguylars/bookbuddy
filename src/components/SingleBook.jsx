/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleBookQuery } from "./app/booksApi";
import Navigations from "./Navigations";

export default function SingleBook() {
  const params = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetSingleBookQuery(params.id);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Navigations />
          <div className="singleBook">
            <div className="singleBookContents">
              <div>
                <img
                  className="singleImg"
                  src={data.book.coverimage}
                  alt={data.book.title}
                />
                <br />
                <h1 className="display-2 mb-3">{data.book.title}</h1>
                <h1 className="display-4 mb-1"> {data.book.author}</h1>
                <h1 className="display-6 mb-2"> ID: {data.book.id}</h1>
                <p className="lead">{data.book.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/")}
                >
                  Return to Library
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
