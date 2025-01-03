# Block 30 - Book Buddy

## Introduction

We are working with a new client who is wanting to design an online library for the public. Another Full Stack Solutions team has already built out the API, but we need your assistance in developing the front end to ensure on-time delivery to the client. When this is complete, please submit the link to the deployed application so I can share it with the client.

Details on the API can be found 🔗 [here](https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/)

# block-30

https://resplendent-haupia-379441.netlify.app/

Project Management Requirements

I. Project Setup and Core Structure:

- [ ] (Ticket 1: Project Setup)
      _ [x ] Create a new GitHub repository.
      _ [x ] Initialize a new React project (Create React App or Vite).
      _ [ x] Install dependencies:
      _ [ x] react-router-dom
      _ [ x] redux, react-redux, @reduxjs/toolkit
      _ [ x] axios or fetch (for basic AJAX if not using RTK Query exclusively)
      _ [ x] If using RTK Query install @reduxjs/toolkit react-redux
      _ [ x] Initial commit to GitHub.
      II. API Integration (RTK Query or Fetch/Axios):
      _ [x ] Set up RTK Query base API slice.
      _ [x ] Create endpoints for:
      _ [ x] getBooks (GET /books)
      _ [ x] getBookById (GET /books/:id)
      _ [ x] User Authentication (login POST /login, register POST /register)
      _ [ x] User Data (GET /users/:id or /account, PATCH/PUT /users/:id) \* [ x] Book Checkout/Return (POST/PATCH /books/:id/checkout, POST/PATCH /books/:id/return)
- [ ] (Ticket 2: API Setup - Fetch/Axios) (If NOT using RTK Query) \* [ x] Create API service functions using fetch or axios for all required endpoints (same as above).
      III. Component Development & Routing:
- [ ] (Ticket 3: Books List Component)
  - [ x] Create /books route and BooksList component.
  - [ x] Fetch and display all books (using RTK Query or fetch/axios).
  - [ x] Implement book filtering (client-side).
- [ ] (Ticket 4: Book Details Component)
  - [ x] Create /books/:id route and BookDetails component.
  - [ x] Fetch and display individual book details.
- [ ] (Ticket 5: Login/Register Components)
  - [x ] Create /login and /register routes and components.
  - [ x] Implement form handling for login and registration.
  - [ x] Handle authentication logic (using API calls).
- [ ] (Ticket 6: Account Component)
  - [ x] Create /account route and Account component.
  - [ x] Display user information (username/email).
  - [ x] Display list of checked-out books (or message if none).
  - [ x] Implement checkout/return functionality (with API calls).
- [ ] (Ticket 7: Navigation and Routing)
      _ [x ] Implement navigation between routes using react-router-dom components.
      _ [ x] Implement protected routes (redirect unauthenticated users from /account).
      IV. State Management (Redux):
- [ x] (Ticket 8: Redux Setup)
  _ [x ] Set up Redux store.
  _ [ x] Create Redux slices for:
  _ [x ] Authentication (user data, login status).
  _ [ x] Books (if needed for complex state beyond RTK Query caching).
  _ [ ]x User Data (if needed beyond RTK Query).
  _ [ x] Connect components to Redux using useSelector and useDispatch.
  V. Authentication and Authorization:
- [ ] (Ticket 9: Authentication Logic)
  - [ x] Implement login/registration API calls and handle responses.
  - [ x] Store authentication token (e.g., in local storage or cookies).
  - [ ]x Implement logout functionality.
- [ ] (Ticket 10: Authorization Logic)
      _ [x ] Implement protected routes (redirect unauthenticated users from /account).
      _ [x ] Implement conditional rendering based on user authentication status (e.g., show/hide checkout buttons).
      VI. Styling
      _ [x ] Style components using the chosen component library and custom CSS (Flexbox/Grid).
      _ [x ] Remove all console.log() statements.
      _ [ x] Review code for unused variables and functions.
      _ [ x] Ensure consistent code style and formatting.
      _ [ x] Write clear comments.
      _ [ x] Ensure expressive naming conventions. \* [ x] Final commit and README update.
