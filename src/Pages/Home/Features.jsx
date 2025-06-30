import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Create Assignments",
    description:
      "Easily create structured assignments for your peers with deadlines and notes.",
    image: "https://i.ibb.co/wx7wnQw/ass.png",
  },
  {
    title: "Submit & Review",
    description:
      "Submit Google Docs links and get evaluated by peers with meaningful feedback.",
    image: "https://i.ibb.co/JWSMNNhp/sub.png",
  },
  {
    title: "Peer Evaluation",
    description:
      "Grade and provide insights on assignments submitted by others collaboratively.",
    image: "https://i.ibb.co/GQ2VfyY1/evo.png",
  },
  {
    title: "Progress Tracking",
    description:
      "Stay updated with assignment status and personal learning milestones.",
    image: "https://i.ibb.co/x8CkXjsw/pro.png",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Platform Features
      </h2>
      <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500 border border-base-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[35%] mb-4"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-xs">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
