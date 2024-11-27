import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-raleway text-center">
      Navbar
      <Outlet />
      Footer
    </div>
  );
};

export default HomeLayout;
