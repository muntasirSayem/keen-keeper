import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/homepage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Timeline from "../pages/timeline/timeline";
import Stats from "../pages/stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/friend-details",
        element: <FriendDetails />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-3xl md:text-5xl max-w-278 mx-auto text-gray-500">
          404 NOT FOUND
        </p>
      </div>
    ),
  },
]);
