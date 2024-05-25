import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";

import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import AuthContainer from "./pages/authcontainer/AuthContainer";

function App() {
  const { authUser } = useAuthContext();

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const detectTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints;
    };

    setIsTouchDevice(detectTouchDevice());
    const handleTouchStart = () => {
      setIsTouchDevice(true);
    };

    document.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <div className={isTouchDevice ? "touch-device" : ""}>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <AuthContainer />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
