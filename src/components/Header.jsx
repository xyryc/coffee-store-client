import HeaderLogo from "../assets/images/more/logo1.png";
import HeaderBackground from "../assets/images/more/15.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(${HeaderBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavLink
        to={`/`}
        className="flex-1 flex justify-center items-center p-4 gap-2"
      >
        <img className="h-[90px] " src={HeaderLogo} alt="" />
        <h1 className="font-rancho text-4xl md:text-6xl text-white">
          Espresso Emporium
        </h1>
      </NavLink>

      <div className="flex flex-col gap-2">
        <NavLink to={`/signin`} className="btn btn-xs">
          SignIn
        </NavLink>
        <NavLink to={`/signup`} className="btn btn-xs">
          SignUp
        </NavLink>
        <NavLink to={`/users`} className="btn btn-xs">
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
