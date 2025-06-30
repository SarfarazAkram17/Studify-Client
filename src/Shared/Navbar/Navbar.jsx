import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, userEmail, logOutUser } = useAuth();
  const [theme, setTheme] = useState("light");
  const [themeLoaded, setThemeLoaded] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    setThemeLoaded(true);
  }, []);

  // Save theme on change
  useEffect(() => {
    if (themeLoaded) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, themeLoaded]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const links = (
    <>
      <NavLink className="m-1 px-2 py-1 font-semibold" to="/">
        Home
      </NavLink>
      <NavLink className="m-1 px-2 py-1 font-semibold" to="/assignments">
        Assignments
      </NavLink>

      {user && (
        <NavLink
          className="m-1 px-2 py-1 font-semibold"
          to="/pendingAssignments"
        >
          Pending Assignments
        </NavLink>
      )}
    </>
  );

  const profileLinks = (
    <>
      <NavLink
        className="m-1 px-2 py-1 text-xs font-semibold"
        to="/createAssignments"
      >
        Create Assignments
      </NavLink>
      <NavLink
        className="m-1 px-2 py-1 text-xs font-semibold"
        to="/myCreatedAssignments"
      >
        My Created Assignments
      </NavLink>
      <NavLink
        className="m-1 px-2 py-1 text-xs font-semibold"
        to={`/myAttemptedAssignments?email=${userEmail}`}
      >
        My Attempted Assignments
      </NavLink>
    </>
  );

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.warning("You logout successfully");
      })
      .catch((error) => toast.error(error.code));
  };

  return (
    <div className="navbar bg-base-100 px-4 sm:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-48 text-center p-2 shadow"
          >
            {links}
            <div className="flex justify-center my-2 md:hidden">
              {themeLoaded && (
                <label className="toggle text-base-content cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                  />
                  <svg
                    aria-label="sun"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </g>
                  </svg>
                  <svg
                    aria-label="moon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </g>
                  </svg>
                </label>
              )}
            </div>
            {user ? (
              <button
                onClick={handleLogout}
                className="btn block lg:hidden btn-error text-xl my-2"
              >
                Log Out
              </button>
            ) : (
              <Link to="/register" className="lg:hidden block my-2">
                <button className="btn btn-accent text-xl">Register</button>
              </Link>
            )}
          </ul>
        </div>

        <a className="btn btn-ghost text-4xl font-bold rancho">
          <img
            src="https://i.ibb.co/XZt0GXVB/s-removebg-preview.png"
            className="w-11 h-10"
            alt="logo"
          />{" "}
          Studify
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="hidden md:flex">
          {themeLoaded && (
            <label className="toggle text-base-content mr-4 cursor-pointer">
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>
              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          )}
        </div>

        {user ? (
          <div className="flex items-center gap-2">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                  className="rounded-full w-12 h-12 cursor-pointer"
                />
                <Tooltip id="my-tooltip" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 w-52 rounded-box z-10 mt-3 text-center shadow"
              >
                {profileLinks}
              </ul>
            </div>
            <button
              onClick={handleLogout}
              className="btn hidden lg:block btn-error text-xl"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <Link to="/login">
              <button className="btn btn-accent text-xl">Login</button>
            </Link>
            <Link to="/register" className="hidden lg:block">
              <button className="btn btn-accent text-xl">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
