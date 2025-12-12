import { Navigate } from "react-router-dom";
import UserLayout from "@/layouts/project/UserLayout";
import PublishRoutes from "@/routes/PublishRoutes";

export const routes = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { index: true, element: <Navigate to="/publishing" replace /> },
      ...PublishRoutes,
      { path: "*", element: <Navigate to="/publishing" replace /> },
    ],
  },
];
