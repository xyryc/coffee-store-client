import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";
import RegularButton from "../components/RegularButton";
import { GiCoffeeCup } from "react-icons/gi";
import CoffeeCup from "../assets/images/more/4.png";
import CoffeeShop from "../assets/images/more/5.png";

function AllCoffees() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <div className="relative">
        <img
          className="absolute -z-10 top-32 left-0"
          src={CoffeeCup}
          alt="Coffee Cup background"
        />
        <img
          className={`absolute -z-10  right-0 ${
            loadedCoffees.length > 4 && "top-80"
          }`}
          src={CoffeeShop}
          alt="Coffee Shop background"
        />
      </div>

      <div className="container mx-auto px-4 py-28">
        <p className="text-xl mb-2">--- Sip & Savor ---</p>
        <h1
          className="font-rancho text-[55px] text-[#331A15]"
          style={{
            textShadow: "0 0 1px #331A15, 0 0 2px #331A15, 0 0 15px #331A15",
          }}
        >
          Our Popular Products
        </h1>

        <Link to={`/addCoffee`}>
          <RegularButton text={"Add Coffee"} icon={<GiCoffeeCup />} />
        </Link>

        <div className="grid lg:grid-cols-2 gap-6">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllCoffees;
