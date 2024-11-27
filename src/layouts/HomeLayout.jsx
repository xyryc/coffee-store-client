import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="font-raleway text-center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
