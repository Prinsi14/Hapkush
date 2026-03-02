import UploadMeme from "./pages/UploadMeme";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Signup from "./pages/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔥 Firebase login check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}

        <div className="flex-grow">
         <Routes>
  {!isLoggedIn ? (
    <Route path="*" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
  ) : (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/upload" element={<UploadMeme />} />
    </>
  )}
</Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;





