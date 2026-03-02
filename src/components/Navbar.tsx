
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

interface NavbarProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsLoggedIn }: NavbarProps) => {

  const handleLogout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-600">MemeGram</h1>

      <div className="flex gap-4 items-center">
        <Link
  to="/upload"
  className="text-gray-700 hover:text-purple-600 font-medium"
>
  Upload
</Link>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/profile">Profile</Link>

        <button
          onClick={handleLogout}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;











