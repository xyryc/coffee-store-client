import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import FooterBg from "../assets/images/more/24.jpg";
import FooterLogo from "../assets/images/more/logo1.png";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      {/* top */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 place-items-center gap-40 max-w-screen-lg text-left mt-28 mb-12">
        {/* left */}
        <div className="space-y-6">
          <img className="h-[90px]" src={FooterLogo} alt="Footer Logo" />
          <h1
            className="text-[#331A15] font-rancho text-5xl"
            style={{
              textShadow: "0 0 1px #331A15, 0 0 2px #331A15, 0 0 15px #331A15",
            }}
          >
            Expresso Emporium
          </h1>
          <p className="xl:text-xl text-[#1B1A1A]">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-5 text-[#331A15]">
            <FaFacebookSquare className="h-10 w-10 cursor-pointer" />
            <FaTwitter className="h-10 w-10 cursor-pointer" />
            <FaInstagram className="h-10 w-10 cursor-pointer" />
            <FaLinkedin className="h-10 w-10 cursor-pointer" />
          </div>
          <h2
            className="text-[#331A15] text-[45px] font-rancho"
            style={{
              textShadow: "0 0 1px #331A15, 0 0 2px #331A15, 0 0 15px #331A15",
            }}
          >
            Get in Touch
          </h2>

          <div className="flex items-center text-[#1B1A1A] gap-6 xl:text-xl">
            <FaPhoneAlt /> +88 01533 333 333
          </div>
          <div className="flex items-center text-[#1B1A1A] gap-6 xl:text-xl">
            <IoMdMail /> info@expresso.com
          </div>
          <div className="flex items-center text-[#1B1A1A] gap-6 xl:text-xl">
            <FaLocationDot /> +88 01533 333 333
          </div>
        </div>

        {/* right */}
        <div>
          <h2
            className="text-[#331A15] text-[45px] font-rancho mb-7"
            style={{
              textShadow: "0 0 1px #331A15, 0 0 2px #331A15, 0 0 15px #331A15",
            }}
          >
            Connect with Us
          </h2>

          <form className="space-y-4">
            {/* sm */}
            <input
              type="text"
              placeholder="Name"
              className="input input-sm w-full"
            />

            {/* sm */}
            <input
              type="email"
              placeholder="Email"
              className="input input-sm w-full"
            />

            {/* sm */}
            <textarea
              placeholder="Message"
              className="textarea textarea-sm w-full"
              rows={"5"}
            ></textarea>

            <input
              className="font-rancho rounded-full text-lg 2xl:text-2xl btn btn-outline text-[#331A15]"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>

      {/* bottom */}
      <div
        className="p-3"
        style={{
          backgroundImage: `url(${FooterBg})`,
        }}
      >
        <p className="font-rancho text-xl text-white">
          © Copyright Espresso Emporium ! {new Date().getFullYear()} All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
