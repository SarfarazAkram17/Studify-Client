import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import lottieLoading from "../../assets/loading.json";
import useAuth from "../../Hooks/useAuth";
import Lottie from "lottie-react";

const PendingAssignments = () => {
  const { uid } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/submissions?status=pending&uid=${uid}`).then((res) => {
      setPendingAssignments(res.data);
      setLoading(false);
    });
  }, [axiosSecure, uid]);

  if (loading) {
    return (
      <Lottie
        loop={true}
        animationData={lottieLoading}
        className="h-[40vh] w-auto"
      ></Lottie>
    );
  }
  return (
    <div>
      <div className="px-4 py-10 max-w-5xl mx-auto">
        {pendingAssignments.length === 0 ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-info">
              No Pending Assignments
            </h1>
            <p className="text-center text-gray-600 text-[13px] max-w-2xl mx-auto font-semibold mb-10">
              Great job! There are currently no assignments waiting for your
              evaluation. Check back later for new submissions or focus on
              completing your own assignments. Keep up the excellent work and
              help maintain the group's progress!
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-info">
              Pending Assignments to Evaluate
            </h1>
            <p className="text-center text-gray-600 text-[13px] max-w-2xl mx-auto font-semibold mb-10">
              Here you can review and evaluate all assignments submitted by your
              friends that are awaiting grading. Click on "Give Mark" to view
              the submission details and provide feedback. Remember, you cannot
              grade your own submissions. Help your peers by completing their
              assessments!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pendingAssignments.map((assignment) => (
                <div
                  key={assignment._id}
                  className="space-y-4 bg-base-300 p-4 rounded-lg"
                >
                  <h2 className="text-2xl font-semibold">
                    {assignment.assignment_title}
                  </h2>

                  <p className="text-xs font-medium">
                    <strong>Marks:</strong> {assignment.assignment_marks}
                  </p>
                  <p className="text-xs font-medium">
                    <strong>Examinee Email:</strong> {assignment.examinee_email}
                  </p>
                  <p className="text-xs font-medium">
                    <strong>Examinee Name:</strong> {assignment.examinee_name}
                  </p>
                  <Link to={`/giveAssignmentMark/${assignment._id}`}>
                    {" "}
                    <button className="btn btn-info text-lg">Give Mark</button>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PendingAssignments;
