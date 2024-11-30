import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import HomeLayout from "../Layouts/HomeLayout";
import AllCoffees from "../pages/AllCoffees";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <AllCoffees />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/users")
      },
    ],
  },
]);

export default router;
