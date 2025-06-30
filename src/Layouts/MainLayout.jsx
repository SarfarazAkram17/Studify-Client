import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme !== theme) {
        setTheme(currentTheme);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [theme]);

  return (
    <div className="xl:container mx-auto">
      <Navbar></Navbar>
      <div className="my-6">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer theme={theme}></ToastContainer>
    </div>
  );
};

export default MainLayout;
