import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsLoggedIn }: NavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <h1 className="text-xl font-bold">Hapkush</h1>

      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/profile">Profile</Link>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;








