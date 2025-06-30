import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";

const AssignmentCard = ({ assignment, handleAssignmentDelete }) => {
  const { _id, title, thumbnail_image, marks, difficulty, description } = assignment;

  return (
    <div className="bg-base-300 rounded-xl shadow-md p-4">
      <img
        src={thumbnail_image}
        alt={title}
        className="w-full h-52 md:h-48 lg:h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-sm my-4 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium"><strong>Marks:</strong> {marks}</span>
        <span className="text-sm font-medium"><strong>Difficulty:</strong> {difficulty}</span>
      </div>
     
      <div className="flex gap-2">
        <Link to={`/assignmentDetails/${_id}`}>
          <button className="bg-[#b18a56] btn text-lg rounded-sm my-2 px-2.5 block text-white">
            <IoMdEye size={20} />
          </button>
        </Link>
      <Link to={`/updateAssignment/${_id}`}>
        <button className="bg-[#3C393B] btn text-lg rounded-sm my-2 px-2.5 block text-white">
          <MdEdit size={20} />
        </button>
      </Link>
        <button
        onClick={()=>{handleAssignmentDelete(_id)}}
          className="bg-[#EA4744] btn text-lg rounded-sm my-2 px-2.5 block text-white"
        >
          <MdDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default AssignmentCard;
