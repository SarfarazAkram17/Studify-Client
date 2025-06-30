import React, { useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AssignmentDetails = () => {
  const axiosSecure = useAxiosSecure();
  const assignment = useLoaderData();
  const { user, uid, userEmail } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    _id,
    title,
    description,
    creator_email,
    dueDate,
    difficulty,
    thumbnail_image,
    marks,
  } = assignment;

  const handleSubmission = (e) => {
    e.preventDefault();
    const form = e.target;
    const quickNote = form.quickNote.value.split(",").map((qn) => qn.trim());
    
    const submission = {
      assignmentId: _id,
      googleDocLink: form.googleDocLink.value,
      quickNote,
      status: "pending",
      examinee_email: userEmail,
      examinee_name: user.displayName,
    };

    setSubmitting(true);

    axiosSecure
      .post(`/submissions?uid=${uid}`, submission)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Assignment submitted successfully!");
          setShowModal(false);
          setSubmitting(false);
        } else {
          toast.error(res.data.message);
          setShowModal(false);
          setSubmitting(false);
        }
      })
      .catch((error) => {
        toast.error(error.code);
        setSubmitting(false);
      });
  };

  return (
    <div className="my-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link to={-1}>
            <BsArrowLeftCircleFill size={22} />
          </Link>
        </div>

        <h1 className="text-5xl text-info font-bold mb-6 text-center">
          Assignment Details
        </h1>
        <p className="text-center text-gray-600 text-[13px] max-w-2xl mx-auto font-semibold mb-10">
          Review the assignment information carefully including its difficulty,
          due date, and total marks. If you're ready to take this assignment,
          click on the "Take Assignment" button to submit your response. Make
          sure to include a valid Google Docs link and a short note explaining
          your work.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 text-center space-y-4 bg-base-200 border-2 border-gray-200 rounded-xl shadow-lg">
        <div className="mb-6 flex justify-center">
          <img
            src={thumbnail_image}
            alt={title}
            className="w-[100%] md:w-[50%] h-auto rounded-lg"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-sm font-semibold">
          <strong>Creator Email:</strong> {creator_email}
        </p>
        <p className="text-sm font-semibold">{description}</p>
        <p className="text-sm font-semibold">
          <strong>Marks:</strong> {marks}
        </p>
        <p className="text-sm font-semibold">
          <strong>Difficulty:</strong> {difficulty}
        </p>
        <p className="text-sm font-semibold">
          <strong>Due Date: </strong> {dueDate?.slice(0, 10)}
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="btn btn-info px-14 my-4 text-2xl rounded-full"
        >
          Take Assignment
        </button>
      </div>

      {/* Modal for submission */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-lg bg-opacity-40 z-50 flex justify-center items-center">
          <div className="bg-base-200 p-8 mx-4 rounded-lg w-full max-w-lg shadow-xl border-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Submit Assignment
            </h2>
            <form onSubmit={handleSubmission} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Google Docs Link
                </label>
                <input
                  type="url"
                  name="googleDocLink"
                  required
                  className="input input-bordered w-full bg-base-100 placeholder:text-xs placeholder:font-semibold h-8"
                  placeholder="Google Doc link"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Quick Note
                </label>
                <textarea
                  name="quickNote"
                  rows="4"
                  className="textarea textarea-bordered w-full bg-base-100 placeholder:text-xs placeholder:font-semibold"
                  placeholder={`Write Quick notes

1. Write quick notes like this.
2. If needed seperate with comma
`}
                ></textarea>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn btn-error text-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-info text-lg"
                  disabled={submitting}
                >
                  {submitting ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentDetails;
