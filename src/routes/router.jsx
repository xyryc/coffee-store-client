import { createBrowserRouter } from "react-router-dom";
import UpdateCoffee from "../pages/UpdateCoffee";
import AllCoffees from "../pages/AllCoffees";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";
import HomeLayout from "../layouts/HomeLayout";
import AddCoffee from "../pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <AllCoffees />,
        loader: () =>
          fetch("https://coffee-store-server-psi-ochre.vercel.app/coffee"),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-psi-ochre.vercel.app/coffee/${params.id}`
          ),
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
        loader: () =>
          fetch("https://coffee-store-server-psi-ochre.vercel.app/users"),
      },
    ],
  },
]);

export default router;
