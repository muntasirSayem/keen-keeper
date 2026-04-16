import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Stats from "../pages/stats/Stats";
import HomePage from "../pages/homepage/HomePage";
import Timeline from "../pages/timeline/Timeline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: async () => {
          const res = await fetch("/friends.json");
          return res.json();
        },
      },
      {
        path: "/friend-details/:friendId",
        element: <FriendDetails />,
        loader: () => fetch("/friends.json"),
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
