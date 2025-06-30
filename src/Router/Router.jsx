import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import PrivateRouter from "./PrivateRouter";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Assignments from "../Pages/Assignments/Assignments";
import UpdateAssignment from "../Pages/UpdateAssingment/UpdateAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import MyAttemptedAssignments from "../Pages/MyAttemptedAssignments/MyAttemptedAssignments";
import PendingAssingments from "../Pages/PendingAssignments/PendingAssignments";
import GiveAssignmentMark from "../Pages/GiveAssignmentMark/GiveAssignmentMark";
import Lottie from "lottie-react";
import lottieLoading from "../assets/loading.json";
import { lazy, Suspense } from "react";
import MyCreatedAssignment from "../Pages/MyCreatedAssignment/MyCreatedAssignment";

const Home = lazy(() => import("../Pages/Home/Home"));
const Login = lazy(() => import("../Pages/Login/Login"));
const Register = lazy(() => import("../Pages/Register/Register"));
const ErrorPage = lazy(() => import("../Pages/ErrorPage/ErrorPage"));
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <Lottie
                loop={true}
                animationData={lottieLoading}
                className="h-[40vh] w-auto"
              ></Lottie>
            }
          >
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense
            fallback={
              <Lottie
                loop={true}
                animationData={lottieLoading}
                className="h-[40vh] w-auto"
              ></Lottie>
            }
          >
            <Login></Login>
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense
            fallback={
              <Lottie
                loop={true}
                animationData={lottieLoading}
                className="h-[40vh] w-auto"
              ></Lottie>
            }
          >
            <Register></Register>
          </Suspense>
        ),
      },
      {
        path: "/assignments",
        Component: Assignments,
      },
      {
        path: "/pendingAssignments",
        element: (
          <PrivateRouter>
            <PendingAssingments></PendingAssingments>
          </PrivateRouter>
        ),
        hydrateFallbackElement: (
          <Lottie
            loop={true}
            animationData={lottieLoading}
            className="h-[40vh] w-auto"
          ></Lottie>
        ),
      },
      {
        path: "/giveAssignmentMark/:id",
        loader: ({ params }) =>
          fetch(`https://assignment-11-sarfaraz-akram.vercel.app/submissions/${params.id}`),
        element: (
          <PrivateRouter>
            <GiveAssignmentMark></GiveAssignmentMark>
          </PrivateRouter>
        ),
        hydrateFallbackElement: (
          <Lottie
            loop={true}
            animationData={lottieLoading}
            className="h-[40vh] w-auto"
          ></Lottie>
        ),
      },
      {
        path: "/createAssignments",
        element: (
          <PrivateRouter>
            <CreateAssignment></CreateAssignment>
          </PrivateRouter>
        ),
      },
      {
        path: "/assignmentDetails/:id",
        loader: ({ params }) =>
          fetch(`https://assignment-11-sarfaraz-akram.vercel.app/assignments/${params.id}`),
        element: (
          <PrivateRouter>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRouter>
        ),
        hydrateFallbackElement: (
          <Lottie
            loop={true}
            animationData={lottieLoading}
            className="h-[40vh] w-auto"
          ></Lottie>
        ),
      },
      {
        path: "/updateAssignment/:id",
        loader: ({ params }) =>
          fetch(`https://assignment-11-sarfaraz-akram.vercel.app/assignments/${params.id}`),
        element: (
          <PrivateRouter>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRouter>
        ),
        hydrateFallbackElement: (
          <Lottie
            loop={true}
            animationData={lottieLoading}
            className="h-[40vh] w-auto"
          ></Lottie>
        ),
      },
      {
        // make this page as my own extra feature
        path: "/myCreatedAssignments",
        element: (
          <PrivateRouter>
            <MyCreatedAssignment></MyCreatedAssignment>
          </PrivateRouter>
        ),
      },
      {
        path: "/myAttemptedAssignments",
        element: (
          <PrivateRouter>
            <MyAttemptedAssignments></MyAttemptedAssignments>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <Lottie
              loop={true}
              animationData={lottieLoading}
              className="h-[50vh] w-auto"
            ></Lottie>
          </div>
        }
      >
        <ErrorPage></ErrorPage>
      </Suspense>
    ),
  },
]);
