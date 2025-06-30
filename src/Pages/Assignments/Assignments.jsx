import React, { useState, useEffect } from "react";
import AssignmentCard from "../../Shared/AssignmentCard/AssignmentCard";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import Lottie from "lottie-react";
import lottieLoading from "../../assets/loading.json";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Assignments = () => {
  const axiosSecure = useAxiosSecure()
  const { uid, userEmail } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [hasAnyAssignments, setHasAnyAssignments] = useState(true);

  const getAssignments = () => {
    let url = "https://assignment-11-sarfaraz-akram.vercel.app/assignments";
    const queryParams = [];

    if (filter) queryParams.push(`difficulty=${filter}`);
    if (searchText)
      queryParams.push(`search=${encodeURIComponent(searchText)}`);

    if (queryParams.length > 0) {
      url += `?${queryParams.join("&")}`;
    }

    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setAssignments(res.data);
        setLoading(false);
        if (!filter && !searchText) {
          setHasAnyAssignments(res.data.length > 0);
        }
      })
      .catch((error) => {
        toast.error(error.code || "Failed to fetch assignments");
        setLoading(false);
      });
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      getAssignments();
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [filter, searchText]);

  const handleAssignmentDelete = (id) => {
    if (!userEmail) {
      return toast.warn("Please login first");
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/assignments/${id}?email=${userEmail}&uid=${uid}`)
          .then((res) => {
            if (res.data.deletedCount) {
              toast.success("Assignment deleted successfully");
              setAssignments(assignments.filter((a) => a._id !== id));
            } else {
              toast.error(res.data.message);
            }
          })
          .catch((error) => {
            toast.error(error.code);
          });
      }
    });
  };

  const showFullPageLoader = loading && !filter && !searchText;

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      {showFullPageLoader ? (
        <Lottie
          loop={true}
          animationData={lottieLoading}
          className="h-[40vh] w-auto mx-auto"
        />
      ) : (
        <>
          {/* Headings */}
          {assignments.length === 0 ? (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-info">
                {filter || searchText
                  ? "No Assignments Found"
                  : "No Assignments Available"}
              </h1>
              <p className="text-center text-gray-600 text-[13px] max-w-2xl mx-auto font-semibold mb-10">
                {filter || searchText
                  ? "Try adjusting your search or filter."
                  : "There are currently no assignments created. Be the first to create an assignment and help others learn!"}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-info">
                Explore All Assignments
              </h1>
              <p className="text-center text-gray-600 text-[13px] max-w-2xl mx-auto font-semibold mb-10">
                Discover a variety of assignments created by fellow learners.
                Dive into projects like portfolio websites, chat apps,
                calculators, and more. Click “View” to explore, “Edit” to update
                your own, or “Delete” if you no longer need it.
              </p>
            </>
          )}

          {/* Filter and Search */}
          {hasAnyAssignments && (
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-info rancho text-xl"
                >
                  Filter By Difficulty:{" "}
                  {filter ? ` ${filter}` : <IoIosArrowDown />}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a onClick={() => setFilter("Easy")}>Easy</a>
                  </li>
                  <li>
                    <a onClick={() => setFilter("Medium")}>Medium</a>
                  </li>
                  <li>
                    <a onClick={() => setFilter("Hard")}>Hard</a>
                  </li>
                  <li>
                    <a onClick={() => setFilter("")}>Clear Filter</a>
                  </li>
                </ul>
              </div>

              <input
                type="text"
                placeholder="Search by title..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="input input-bordered w-full sm:w-64"
              />
            </div>
          )}

        
          {loading ? (
            <div className="flex justify-center items-center min-h-[40vh]">
              <Lottie
                loop={true}
                animationData={lottieLoading}
                className="h-[30vh] w-auto"
              />
            </div>
          ) : assignments.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {assignments.map((assignment) => (
                <AssignmentCard
                  key={assignment._id}
                  assignment={assignment}
                  handleAssignmentDelete={handleAssignmentDelete}
                />
              ))}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Assignments;
