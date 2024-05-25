import toast from "react-hot-toast";
import {
  FaUserAlt,
  FaGoogle,
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  const handleClickSoon = () => {
    return toast.error("This feature is not available yet. Coming soon!");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i>
            <FaUserAlt className="icon" />
          </i>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <i>
            <RiLockPasswordFill className="icon" />
          </i>
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-field forgot">
          <Link to="#" onClick={handleClickSoon}>
            Forget Password
          </Link>
        </div>
        <button className="btn solid" disabled={loading}>
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Login"
          )}
        </button>

        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <Link to="#" className="social-icon" onClick={handleClickSoon}>
            <FaGoogle className="icon" />
          </Link>
          <Link to="#" className="social-icon" onClick={handleClickSoon}>
            <FaFacebook className="icon" />
          </Link>
          <Link to="#" className="social-icon" onClick={handleClickSoon}>
            <FaTwitterSquare className="icon" />
          </Link>
          <Link to="#" className="social-icon" onClick={handleClickSoon}>
            <FaLinkedin className="icon" />
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
