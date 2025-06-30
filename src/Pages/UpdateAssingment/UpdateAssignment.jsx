import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UpdateAssignment = () => {
  const axiosSecure = useAxiosSecure()
  const { uid, userEmail } = useAuth();
  const navigate = useNavigate();
  const assignment = useLoaderData();
  const {
    _id,
    dueDate,
    difficulty,
    description,
    thumbnail_image,
    title,
    creator_email,
    marks,
  } = assignment;

  const [selectedDate, setSelectedDate] = useState(dueDate);
  const [updating, setUpdating] = useState(false);

  const handleUpdateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedAssignment = Object.fromEntries(formData.entries());
    updatedAssignment.dueDate = selectedDate;
    updatedAssignment.marks = parseInt(updatedAssignment.marks);

    updatedAssignment.title = updatedAssignment.title.trim();
    updatedAssignment.description = updatedAssignment.description.trim();
    updatedAssignment.thumbnail_image =
      updatedAssignment.thumbnail_image.trim();

    setUpdating(true);
    if (updatedAssignment.title.length < 5) {
      toast.error("Title must be at least 5 characters long");
      setUpdating(false);
      return;
    }

    if (updatedAssignment.marks < 0) {
      setUpdating(false);
      return toast.error("Assignment marks should be positive number");
    }

    if (updatedAssignment.marks > 100) {
      setUpdating(false);
      return toast.error("Maximum assignment marks is 100");
    }

    if (selectedDate < new Date()) {
      toast.error("Due date cannot be in the past");
      setUpdating(false);
      return;
    }

    axiosSecure
      .put(
        `/assignments/${_id}?email=${userEmail}&uid=${uid}`,
        updatedAssignment
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("You successfully update the assignment");
          navigate(-1);
        } else {
          toast.error(res.data.message);
        }
        setUpdating(false);
      })
      .catch((error) => {
        toast.error(error.code);
        setUpdating(false);
      });
  };

  return (
    <div className="px-4">
      <div className="my-8 max-w-5xl mx-auto">
        <Link to={-1}>
          <BsArrowLeftCircleFill size={25} />
        </Link>
      </div>

      <div className="max-w-5xl px-8 py-16 mx-auto rounded-lg my-12 bg-base-300">
        <h1 className="text-center text-4xl md:text-5xl mb-8 font-bold">
          Update Assignment
        </h1>
        <p className="max-w-2xl md:max-w-3xl leading-5 mx-auto text-center text-xs md:text-sm mb-12">
          You're now updating an existing assignment. You can change the title,
          description, marks, difficulty level etc. Make sure the updated
          information is clear and accurate so other users can continue to
          benefit from this assignment. Once saved, your changes will be
          reflected immediately for all users.
        </p>
        <form onSubmit={handleUpdateAssignment}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Creator Email</label>
              <input
                type="email"
                name="creator_email"
                readOnly
                defaultValue={creator_email}
                className="input w-full bg-base-100 placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Assignment Title"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label font-bold text-sm">
                Assignment Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                required
                className="input w-full bg-base-100 placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Assignment Title"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Marks</label>
              <input
                type="number"
                name="marks"
                defaultValue={marks}
                required
                className="input w-full bg-base-100 placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Marks"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label font-bold text-sm">
                Thumbnail Image URL
              </label>
              <input
                type="url"
                name="thumbnail_image"
                defaultValue={thumbnail_image}
                required
                className="input w-full bg-base-100 placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Thumbnail Image URL"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Difficulty</label>
              <select
                defaultValue={difficulty}
                name="difficulty"
                required
                className="select w-full bg-base-100"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Due Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="input w-full bg-base-100 h-8"
                dateFormat="dd/MM/yyyy"
                required
              />
            </fieldset>

            <fieldset className="fieldset md:col-span-2">
              <label className="label font-bold text-sm">Description</label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                minLength={30}
                required
                className="input w-full bg-base-100 placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Description"
              />
            </fieldset>
          </div>

          <button
            className="w-full btn mt-12 text-2xl md:text-3xl btn-info rounded-full"
            disabled={updating}
          >
            {updating ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Update Assignment"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAssignment;
