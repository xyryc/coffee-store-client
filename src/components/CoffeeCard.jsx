import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  return (
    <div className="rounded-xl p-8 flex gap-8 justify-center items-center">
      <img src={coffee.photo} alt={coffee.name} className="h-60" />

      <div className="space-y-2 border text-left">
        <p className="text-xl">
          <span className="font-semibold text-gray-600">Name:</span>
          {coffee.name}
        </p>
        <p className="text-xl">
          <span className="font-semibold text-gray-600">Chef:</span>
          {coffee.chef}
        </p>
        <p className="text-xl">
          <span className="font-semibold text-gray-600">Name:</span>
          {coffee.name}
        </p>
      </div>

      <div className="space-y-4 ml-5">
        <div className="p-3 bg-[#D2B48C] rounded-md text-white">
          <FaEye />
        </div>

        <div className="p-3 bg-[#3C393B] rounded-md text-white">
          <MdEdit />
        </div>

        <div className="p-3 bg-[#EA4744] rounded-md text-white">
          <MdDelete />
        </div>

      </div>
    </div>
  );
};

export default CoffeeCard;
