import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, price, chef } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted",
                icon: "success",
              });

              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="rounded-xl p-8 flex flex-col sm:flex-row gap-8 justify-center items-center">
      <img src={photo} alt={name} className="h-60 w-48 object-scale-down" />

      <div className="space-y-2 text-left">
        <p className="text-xl text-gray-600">
          <span className="font-semibold text-black">Name: </span>
          {name}
        </p>
        <p className="text-xl text-gray-600">
          <span className="font-semibold text-black">Chef: </span>
          {chef}
        </p>
        <p className="text-xl text-gray-600">
          <span className="font-semibold text-black">Price: </span>
          {price}
        </p>
      </div>

      <div className="flex gap-4 sm:flex-col ml-5">
        <div className="btn bg-[#D2B48C] text-white">
          <FaEye />
        </div>

        <Link
          to={`/updateCoffee/${_id}`}
          className="btn bg-[#3C393B] text-white"
        >
          <MdEdit />
        </Link>

        <div
          onClick={() => handleDelete(_id)}
          className="btn bg-[#EA4744] text-white"
        >
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
