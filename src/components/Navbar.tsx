import { Link } from "react-router-dom";

interface NavbarProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsLoggedIn }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-purple-600">
        MemeGram
      </h1>

      {/* Menu */}
      <div className="flex gap-4 items-center">

        <Link
          to="/"
          className="text-gray-700 hover:text-purple-600 font-medium"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="text-gray-700 hover:text-purple-600 font-medium"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="text-gray-700 hover:text-purple-600 font-medium"
        >
          Signup
        </Link>

        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;










