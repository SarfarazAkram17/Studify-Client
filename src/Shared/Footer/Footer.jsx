import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <NavLink
                to="/"
                aria-label="Go to home page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/assignments"
                aria-label="View all assignments"
              >
                Assignments
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/pendingAssignments"
                  aria-label="View pending assignments"
                >
                  Pending Assignments
                </NavLink>
              </li>
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
              href="https://www.linkedin.com"
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

        <div>
          <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe for study tips and updates!</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <form
              className="flex items-center"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Successfully subscribed!");
                e.target.reset()
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                className="px-2 py-3 rounded-md text-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Email for newsletter subscription"
                required
              />
              <input
                type="submit"
                className="py-1 px-2 text-lg btn btn-info font-bold rancho"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Studify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
