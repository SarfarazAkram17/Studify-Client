import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import lottieLoading from "../../assets/loading.json";
import AssignmentCard from "../../Shared/AssignmentCard/AssignmentCard";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyCreatedAssignments = () => {
  const axiosSecure = useAxiosSecure()
  const { uid, userEmail } = useAuth();
  const [myAssignments, setMyAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`/myAssignments?email=${userEmail}&uid=${uid}`)
      .then((res) => {
        setMyAssignments(res.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  }, [userEmail, axiosSecure, uid]);

  if (loading) {
    return (
      <Lottie
        loop={true}
        animationData={lottieLoading}
        className="h-[40vh] w-auto"
      ></Lottie>
    );
  }

  const handleAssignmentDelete = (id) => {
    if (!userEmail) {
      return toast.warn("Login First");
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
              toast.success("You successfully deleted the assignment");
              const remainingAssignments = myAssignments.filter(
                (assignment) => assignment._id !== id
              );
              setMyAssignments(remainingAssignments);
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
    <div className="my-12 px-4 max-w-5xl mx-auto">
      {myAssignments.length === 0 ? (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-info">
            No Assignments Created Yet
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto font-semibold mb-10">
            You haven't created any assignments yet. Start by creating one so
            others can attempt and submit it.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl md:text-5xl mb-10 font-bold text-center text-info">
            My Created Assignments: {myAssignments.length}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myAssignments.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                assignment={assignment}
                handleAssignmentDelete={handleAssignmentDelete}
              ></AssignmentCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyCreatedAssignments;