import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.scss";
import { Link } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  const handleStart = () => {
    if (email) setToggle(true);
  };
  const handleFinish = async (e) => {
    const url = "http://localhost:8800/api/";
    e.preventDefault();
    console.log(email);
    console.log(username);
    console.log(password);
    try {
      await axios.post(url + "auth/register", { email, username, password });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <button className="loginButton">
            <a
              to="./login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sign In
            </a>
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!toggle ? (
          <div className="input">
            <input
              type="email"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
export default Register;
