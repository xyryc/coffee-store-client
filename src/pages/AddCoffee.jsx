import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      quantity,
      price,
      photo,
    };
    console.log(newCoffee);

    // send data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] container mx-auto px-4 my-10">
      <h2 className="text-[#374151] text-[45px] font-rancho">Add a coffee</h2>

      <form onSubmit={handleAddCoffee}>
        <div className="md:flex gap-6">
          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold text-xl">Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold text-xl">Chef</span>
            </div>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="md:flex gap-6">
          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold text-xl">Supplier</span>
            </div>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold text-xl">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="md:flex gap-6">
          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold text-xl">Category</span>
            </div>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold text-xl">Details</span>
            </div>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="md:flex gap-6">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold text-xl">Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              placeholder="Enter quantity"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold text-xl">Price</span>
            </div>
            <input
              type="text"
              name="price"
              placeholder="Enter coffee price"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold text-xl">Photo</span>
          </div>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
          />
        </label>

        <input
          className="btn btn-block mt-6 border-[#331A15] bg-[#D2B48C]"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
