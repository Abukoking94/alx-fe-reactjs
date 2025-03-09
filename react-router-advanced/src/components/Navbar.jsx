import { Link, useNavigate } from "react-router-dom";
import auth from "../auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => navigate("/"));
  };

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> |{" "}
      <Link to="/profile">Profile</Link>
      {auth.isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
