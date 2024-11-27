/* eslint-disable react/prop-types */

const RegularButton = ({ text, icon }) => {
  return (
    <button className="text-shadow-xl btn-outline btn border-amber-900 border-2 text-2xl hover:bg-white  rounded-md bg-[#E3B577] text-white font-rancho">
      {text} <span className="text-amber-900">{icon}</span>
    </button>
  );
};

export default RegularButton;
