import { useState } from "react";
import Login from "./pages/Login";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen flex flex-col" : "min-h-screen flex flex-col"}>
        
<Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  setIsLoggedIn={setIsLoggedIn}
/>



        <div className="flex-grow">
         <Routes>
  {!isLoggedIn ? (
    <Route path="*" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
  ) : (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
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

