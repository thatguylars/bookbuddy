/* TODO - add your code to create a functional React component that renders a registration form */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRegisterUserMutation } from "./app/userApi.js";
import Navigations from "./Navigations";

export default function Register() {
  const { token } = useSelector((state) => state.userSlice);
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const newUser = async (e) => {
    e.preventDefault();
    const result = await registerUser(form);
    if (result.error) {
      setMessage(result.error.data.message);
      return;
    }
    navigate("/account");
  };
  useEffect(() => {
    const goAccount = () => {
      navigate("/account");
    };
    if (token) goAccount();
  }, []);

  return (
    <div className="loginPage">
      <Navigations />
      {!token && (
        <form onSubmit={newUser} className="form">
          <h1 className="display-2">Sign Up</h1>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstname"
              onChange={updateForm}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastname"
              onChange={updateForm}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              name="email"
              onChange={updateForm}
              required
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={updateForm}
              required
            />
          </div>
          <p className="text-danger">{message}</p>
          <button type="submit" className="btn btn-primary mb-2">
            Sign Up
          </button>
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      )}
    </div>
  );
}
