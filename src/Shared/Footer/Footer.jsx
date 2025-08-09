import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/XZt0GXVB/s-removebg-preview.png"
              alt="Studify Logo"
              className="h-10 sm:h-12 mb-3"
              aria-label="Studify Logo"
            />
            <h1 className="font-bold text-2xl md:text-4xl">Studify</h1>
          </div>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@studify.com"
              className="hover:underline"
              aria-label="Email support"
            >
              support@studify.com
            </a>
          </p>
          <p className="text-sm">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+11234567890"
              className="hover:underline"
              aria-label="Contact phone number"
            >
              +1 (123) 456-7890
            </a>
          </p>
          <p className="text-sm leading-5">
            <strong>Address:</strong> 123 Study Lane, Suite 100, Knowledge City,
            Remote State, USA
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" aria-label="Go to home page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" aria-label="Go to about page">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/assignments" aria-label="View all assignments">
                Assignments
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/pendingAssignments"
                    aria-label="View pending assignments"
                  >
                    Pending Assignments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/createAssignments"
                    aria-label="Create assignment"
                  >
                    Create Assignments
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Connect With Us</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://web.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="hover:text-blue-400"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter/X page"
              className="hover:text-blue-600"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarfarazakram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Google page"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="hover:text-pink-400"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-13 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Studify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
