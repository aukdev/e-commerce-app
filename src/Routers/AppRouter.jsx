import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Category from "../Pages/Category/Category";
import CategoryItems from "../Pages/CategoryItems/CategoryItems";
import Home from "../Pages/Home/Home";
import ItemPage from "../Pages/ItemPage/ItemPage";
import Login from "../Pages/Login/Login";
import Test from "../Pages/Test";
import User from "../Pages/User/User";
import UserProtected from "./UserProtected";
import AdminProtected from "./AdminProtected";
import Admin from "../Pages/Admin/Admin";
import NoUrl from "../Pages/404/NoUrl";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "category",
        children: [
          {
            index: true,
            element: <Category />,
          },
          {
            path: ":categoryId",
            children: [
              {
                index: true,
                element: <CategoryItems />,
              },
              {
                path: ":itemId",
                element: <ItemPage />,
              },
            ],
          },
        ],
      },
      {
        element: <UserProtected />,
        children: [
          {
            path: "profile",
            element: <User />,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <NoUrl />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <AdminProtected />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
