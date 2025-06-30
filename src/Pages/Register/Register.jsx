import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const photo = formData.get("photo").trim();
    const password = formData.get("password");

    setLoading(true);

    if (name.length < 5) {
      toast.error("Name must be at least 5 characters long");
      setLoading(false);
      return;
    }

    const uppercaseRegex = /(?=.*[A-Z])/;
    const lowercaseRegex = /(?=.*[a-z])/;
    const lengthRegex = /.{6,}/;
    const specialCharRegex = /[?@#$&]/;

    if (!uppercaseRegex.test(password)) {
      toast.error("Password should have at least one uppercase");
      setLoading(false);
      return;
    }
    if (!lowercaseRegex.test(password)) {
      toast.error("Password should have at least one lowercase");
      setLoading(false);
      return;
    }
    if (!lengthRegex.test(password)) {
      toast.error("Password should have at least 6 characters or longer");
      setLoading(false);
      return;
    }
    if (!specialCharRegex.test(password)) {
      toast.error(
        "Password must include at least one special character from: ? @ # $ &"
      );
      setLoading(false);
      return;
    }

    createUser(email, password)
      .then(() => {
        toast.success("You registered successfully");
        updateUserProfile(name, photo).catch((error) =>
          toast.error(error.code)
        );
        navigate(location.state || "/");
        form.reset();
        setLoading(false);
            window.location.reload()
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  return (
    <div className="px-4">
      <div className="card bg-base-100 w-full max-w-sm mx-auto my-12 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold mb-4">Register Now!</h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              required
              className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
              name="name"
              placeholder="Enter your Name"
            />
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              required
              className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
              name="email"
              placeholder="Enter your Email"
            />
            <label className="label font-semibold">Photo URL</label>
            <input
              type="url"
              required
              className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
              name="photo"
              placeholder="Enter your Photo Url"
            />
            <label className="label font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input text-lg placeholder:text-[15px] placeholder:font-bold rancho"
                name="password"
                required
                placeholder="Enter your password"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-6 cursor-pointer z-10"
                  size={17}
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-6 cursor-pointer z-10"
                  size={17}
                />
              )}
            </div>
            <button
              className="btn btn-neutral mt-4 text-2xl"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Register"
              )}
            </button>
            <p className="text-xs my-2">
              Already have an account ? Please{" "}
              <Link
                state={location.state}
                to="/login"
                className="underline text-blue-500 font-semibold"
              >
                Login
              </Link>
            </p>
          </form>
          <div className="divider my-4">OR</div>
          <SocialLogin
            state={location.state}
            message={"You registered successfully"}
          ></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
