import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 
                    text-white sounding-lg shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold tracking-wide">
        MemeGram 😂
      </h1>

      <div className="space-x-6 text-lg font-medium">
        <Link 
          to="/" 
          className="hover:text-yellow-300 transition duration-300"
        >
          Home
        </Link>

        <Link 
          to="/explore" 
          className="hover:text-yellow-300 transition duration-300"
        >
          Explore
        </Link>

        <Link 
          to="/profile" 
          className="hover:text-yellow-300 transition duration-300"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}

