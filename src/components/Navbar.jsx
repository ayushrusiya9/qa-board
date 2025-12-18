import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left */}
        <div className="flex items-center gap-6">
          <Link
            to="/qa"
            className="text-lg font-semibold text-slate-800"
          >
            Q&A Board
          </Link>

          {currentUser && (
            <Link
              to="/qa/new"
              className="text-sm text-slate-600 hover:text-indigo-600"
            >
              New Question
            </Link>
          )}

          {currentUser && isAdmin() && (
            <Link
              to="/qa/moderation"
              className="text-sm text-slate-600 hover:text-indigo-600"
            >
              Moderation
            </Link>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {currentUser ? (
            <>
              <span className="text-sm text-slate-500">
                {currentUser.email}
              </span>

              <button
                onClick={handleLogout}
                className="text-sm font-medium text-slate-600 hover:text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-slate-600 hover:text-indigo-600"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
