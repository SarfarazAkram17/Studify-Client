import React, { useState, useEffect } from "react";
import AssignmentCard from "../../Shared/AssignmentCard/AssignmentCard";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import lottieLoading from "../../assets/loading.json";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";

const FeaturedAssignments = () => {
  const axiosSecure = useAxiosSecure();
  const { uid, userEmail } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch random assignments
  const getAssignments = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/assignments/random")
      .then((res) => {
        setAssignments(res.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.code || "Failed to fetch assignments");
        setLoading(false);
      });
  };

  useEffect(() => {
    getAssignments();
  }, []);

  // Delete assignment
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

  return (
    <div className="pb-16">
      {loading ? (
        <Lottie
          loop={true}
          animationData={lottieLoading}
          className="h-[40vh] w-auto mx-auto"
        />
      ) : (
        <div>
            <h1 className="text-4xl md:text-5xl text-center mb-12 font-bold">Featured Assignments</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                assignment={assignment}
                handleAssignmentDelete={handleAssignmentDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedAssignments;
