import HeaderLogo from "../assets/images/more/logo1.png";
import HeaderBackground from "../assets/images/more/15.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <NavLink
      to={`/`}
      className="flex justify-center items-center p-4 gap-2 "
      style={{
        backgroundImage: `url(${HeaderBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <img className="h-[90px] " src={HeaderLogo} alt="" />
      <h1 className="font-rancho text-4xl md:text-6xl text-white">
        Espresso Emporium
      </h1>
    </NavLink>
  );
};

export default Header;
