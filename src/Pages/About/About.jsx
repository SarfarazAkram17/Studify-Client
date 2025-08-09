import React from "react";
import { FaGithub } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      <div className="text-center">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-info mb-6">
          About the Developer
        </h2>
        <p className="text-lg font-semibold text-gray-600 mb-3">
          Hello! I'm <span className="text-info">Sarfaraz Akram</span>, a
          dedicated and passionate full-stack web developer from Bangladesh.
        </p>

        <p className="text-gray-600 mb-12 leading-relaxed font-semibold">
          My expertise lies in crafting dynamic, responsive, and user-friendly
          web applications using technologies like <strong>React.js</strong>,{" "}
          <strong>Tailwind CSS</strong>, <strong>Firebase</strong>,{" "}
          <strong>MongoDB</strong>, and <strong>Express.js</strong>. I’m driven
          by clean code, great user experiences, and scalable backend solutions.
        </p>

        {/* Projects */}
        <h3 className="text-3xl font-bold text-info mb-8">
          🛠️ Other Featured Projects
        </h3>

        <div className="grid gap-8 md:grid-cols-2 text-left">
          {/* Portfolio */}
          <div className="bg-base-200 p-8 rounded-xl md:col-span-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">👨‍💻</span>
              <h4 className="text-3xl font-bold text-info">Portfolio</h4>
            </div>
            <p className="mb-4 leading-relaxed">
              My personal developer portfolio showcasing my full-stack projects,
              skills.
            </p>
            <a
              href="https://sarfarazakram.netlify.app"
              className="text-blue-500 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Visit Portfolio
            </a>
          </div>

          {/* TourNest */}
          <div className="bg-base-200 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.ibb.co/WNFYmhRy/favicon.png"
                alt="TourNest"
                className="h-12 w-12"
              />
              <h4 className="text-3xl font-bold text-info">TourNest</h4>
            </div>
            <p className="mb-4 leading-relaxed">
              TourNest is a complete tourism management platform that allows
              users to book tour packages, apply as tour guides, share stories,
              and make secure payments, all under a role-based access-controlled
              environment.
            </p>
            <div className="flex justify-between items-center">
              <a
                href="https://tournest-sarfaraz-akram.netlify.app"
                className="text-blue-500 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Live Demo
              </a>
              <a
                href="https://github.com/SarfarazAkram17/TourNest-Client"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} className="hover:text-info" />
              </a>
            </div>
          </div>

          {/* TaskWave */}
          <div className="bg-base-200 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.ibb.co/XfF7mp1S/logo.png"
                alt="TaskWave"
                className="h-12 w-12"
              />
              <h4 className="text-3xl font-bold text-info">TaskWave</h4>
            </div>
            <p className="mb-4 leading-relaxed">
              TaskWave is a modern freelance platform for small tasks where
              employers post tasks, and freelancers can bid for them.
            </p>
            <div className="flex justify-between items-center">
              <a
                href="https://taskwave-sarfaraz-akram.netlify.app"
                className="text-blue-500 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Live Demo
              </a>
              <a
                href="https://github.com/SarfarazAkram17/Taskwave-Client"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} className="hover:text-info" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
