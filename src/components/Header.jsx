import HeaderLogo from "../assets/images/more/logo1.png";
import HeaderBackground from "../assets/images/more/15.jpg";

const Header = () => {
  return (
    <div
      className="flex justify-center items-center p-4 gap-2 "
      style={{ backgroundImage: `url(${HeaderBackground})` }}
    >
      <img className="h-[90px] " src={HeaderLogo} alt="" />
      <h1 className="font-rancho text-4xl md:text-6xl text-white">Espresso Emporium</h1>
    </div>
  );
};

export default Header;
