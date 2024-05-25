import { useState } from "react";

import "./authcontainer.css";

import login_img from "../../assets/img/log.svg";
import signup_img from "../../assets/img/signup.svg";

import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";

const AuthContainer = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  const hadleSignUpClick = () => {
    setSignUpMode(true);
  };

  const hadleSignInClick = () => {
    setSignUpMode(false);
  };
  return (
    <>
      <div className={`authContainer ${signUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <Login />
            <Signup />
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Welcome Back to I2C Chat!</h3>
              <p>
                Welcome back to I2C Chat! Continue your conversations, catch up
                with friends, and enjoy our seamless messaging experience.
                <span className="subp">Don't have an account?</span>
              </p>

              <button className="btn transparent" onClick={hadleSignUpClick}>
                Sign Up
              </button>
            </div>
            <img src={login_img} alt="" className="image" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Welcome to I2C Chat!</h3>
              <p>
                Join I2C Chat for an intuitive messaging experience. Connect
                with friends, share moments, and stay in touch effortlessly.
                <span className="subp">Already have an account?</span>
              </p>
              <button className="btn transparent" onClick={hadleSignInClick}>
                Sign in
              </button>
            </div>
            <img src={signup_img} alt="" className="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthContainer;
