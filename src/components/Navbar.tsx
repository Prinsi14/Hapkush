import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ darkMode, setDarkMode, setIsLoggedIn }: NavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-xl font-bold dark:text-white">Hapkush</h1>

      <div className="flex gap-4 items-center">
        <Link to="/" className="dark:text-white">Home</Link>
        <Link to="/explore" className="dark:text-white">Explore</Link>
        <Link to="/profile" className="dark:text-white">Profile</Link>

        {/* Dark Mode Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-black text-white rounded"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;






