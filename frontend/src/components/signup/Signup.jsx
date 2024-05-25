import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGoogle,
  FaTwitterSquare,
  FaUserAlt,
  FaLinkedin,
} from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useState } from "react";

import useSignup from "../../hooks/useSignup";
import GenderCheckbox from "./gendercheckbox/GenderCheckbox";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let success = await signup(inputs);
    if (!success) {
      setInputs({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
      });
    }
  };

  const handleClickSoon = () => {
    return toast.error("This feature is not available yet. Coming soon!");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i>
            <MdDriveFileRenameOutline className="icon" />
          </i>
          <input
            type="text"
            placeholder="Full Name"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
        </div>
        <div className="input-field">
          <i>
            <FaUserAlt className="icon" />
          </i>
          <input
            type="text"
            placeholder="Username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>
        <div className="input-field">
          <i>
            <RiLockPasswordFill className="icon" />
          </i>
          <input
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <div className="input-field">
          <i>
            <RiLockPasswordFill className="icon" />
          </i>
          <input
            type="password"
            placeholder="Confirm Password"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>
        <GenderCheckbox
          onCheckboxChange={handleCheckboxChange}
          selectedGender={inputs.gender}
        />
        <button className="btn solid" disabled={loading}>
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Sign Up"
          )}
        </button>
        <p className="social-text">Or Sign up with social platforms</p>
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

export default Signup;
