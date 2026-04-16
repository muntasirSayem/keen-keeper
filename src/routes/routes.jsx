import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/homepage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, 
        element: <HomePage /> },
      {
        path: "/friend-details",
        element: <FriendDetails />,
      },
    ],
  },
]);
