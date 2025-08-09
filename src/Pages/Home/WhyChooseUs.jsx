import {
  FaUsers,
  FaClipboardCheck,
  FaComments,
  FaShieldAlt,
} from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaUsers className="text-blue-600 w-10 h-10" />,
    title: "Collaborative Learning",
    description:
      "Work together with friends and classmates to improve your skills through shared assignments.",
  },
  {
    id: 2,
    icon: <FaClipboardCheck className="text-green-600 w-10 h-10" />,
    title: "Easy Assignment Management",
    description:
      "Create, submit, and track assignments effortlessly with simple status updates.",
  },
  {
    id: 3,
    icon: <FaComments className="text-purple-600 w-10 h-10" />,
    title: "Peer Feedback",
    description:
      "Receive and provide constructive feedback to improve your work and learn effectively.",
  },
  {
    id: 4,
    icon: <FaShieldAlt className="text-red-600 w-10 h-10" />,
    title: "Secure & Private",
    description:
      "Your data is safe with secure authentication and protected access to your submissions.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="max-w-5xl pb-16 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-base-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
