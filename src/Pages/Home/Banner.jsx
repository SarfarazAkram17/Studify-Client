import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-base-200 to-base-300 py-12 px-4 md:px-6 lg:px-20 rounded-lg">
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Collaborate, Learn &{" "}
            <span className="text-blue-600 rancho">Grow Together</span>
          </h1>
          <p className="mt-6 text-sm">
            Join our group study platform where you can submit assignments,
            review others' work, and improve through peer feedback. Built for
            students who want to learn smarter — together.
          </p>
          <Link to="/assignments">
            <button className="mt-8 btn-info text-lg font-semibold px-6 py-3 rounded-lg btn">
              See All Assignments
            </button>
          </Link>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <img
            src="https://i.ibb.co/rGmbj0C2/team.png"
            alt="Collaborative study illustration"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center gap-12">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-4xl font-extrabold">
            Collaborate, Learn &{" "}
            <span className="text-blue-600 rancho">Grow Together</span>
          </h1>
          <p className="mt-6 text-sm">
            Submit assignments, share ideas, and get feedback — all in one
            place. Perfect for collaborative study groups and peer-based
            learning.
          </p>
          <Link to="/assignments">
            <button className="mt-8 btn-info text-lg font-semibold px-6 py-3 rounded-lg btn">
              See All Assignments
            </button>
          </Link>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <img
            src="https://i.ibb.co/rGmbj0C2/team.png"
            alt="Collaborative study illustration"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
