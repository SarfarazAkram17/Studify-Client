import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CreateAssignment = () => {
  const axiosSecure = useAxiosSecure();
  const { uid, userEmail } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [creating, setCreating] = useState(false);

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const assignment = Object.fromEntries(formData.entries());

    assignment.title = assignment.title.trim();
    assignment.description = assignment.description.trim();
    assignment.thumbnail_image = assignment.thumbnail_image.trim();

    if (assignment.title.length < 5) {
      toast.error("Title must be at least 5 characters long");
      setCreating(false);
      return;
    }

    if (assignment.marks < 0) {
      setCreating(false);
      return toast.error("Assignment marks should be positive number");
    }

    if (assignment.marks > 100) {
      setCreating(false);
      return toast.error("Maximum assignment marks is 100");
    }

    if (selectedDate < new Date()) {
      toast.error("Due date cannot be in the past");
      setCreating(false);
      return;
    }

    assignment.dueDate = selectedDate;
    assignment.marks = parseInt(assignment.marks);
    setCreating(true);

    axiosSecure
      .post(`/assignments?uid=${uid}`, assignment)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("You created assignment successfully");
          form.reset();
          setSelectedDate(new Date());
          setCreating(false);
        }
      })
      .catch((error) => {
        toast.error(error.code);
        setCreating(false);
      });
  };

  return (
    <div className="px-4">
      <div className="max-w-5xl px-8 py-16 mx-auto rounded-lg my-12 bg-base-300">
        <h1 className="text-center text-4xl md:text-5xl mb-8 font-bold">
          Create Assignment
        </h1>
        <p className="max-w-2xl md:max-w-3xl leading-5 mx-auto text-center text-xs md:text-sm mb-12">
          Welcome to the Create Assignment page! Here, you can easily create
          study assignments for your friends and fellow learners. Simply fill in
          the assignment title, description, marks, difficulty level, and due
          date. Once submitted, your assignment will be visible to all users,
          allowing them to view and attempt it. Be clear and detailed to help
          others complete the task successfully!
        </p>
        <form onSubmit={handleCreateAssignment}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <fieldset className="fieldset">
              <label className="label font-bold text-sm">User Email</label>
              <input
                type="email"
                name="creator_email"
                readOnly
                value={userEmail}
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
                required
                className="input w-full bg-base-100 placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Thumbnail Image URL"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Difficulty</label>
              <select
                defaultValue=""
                name="difficulty"
                required
                className="select w-full bg-base-100"
              >
                <option disabled value="">
                  Choose difficulty
                </option>
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
                className="input w-full bg-base-100 placeholder:text-xs placeholder:font-semibold h-8"
                dateFormat="dd/MM/yyyy"
                required
              />
            </fieldset>

            <fieldset className="fieldset md:col-span-2">
              <label className="label font-bold text-sm">Description</label>
              <input
                type="text"
                name="description"
                minLength={30}
                required
                className="input w-full bg-base-100 placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Description"
              />
            </fieldset>
          </div>

          <button
            className="w-full btn mt-12 text-2xl md:text-3xl btn-info rounded-full"
            disabled={creating}
          >
            {creating ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Create Assignment"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
