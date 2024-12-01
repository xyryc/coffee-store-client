import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ name, photo, email, password });

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter and be at least 6 characters long."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log("user created at firebase", result.user);
        const createdAt = result?.user?.metadata?.creationTime;

        const newUser = { photo, name, email, createdAt };
        toast.success("User registered successfully.");

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        }).then((res) =>
          res.json().then((data) => {
            console.log("user created to db", data);

            if (data.insertedId) {
              Swal.fire({
                title: "Success",
                text: "User created in database successfully!",
                icon: "success",
              });
              // navigate("/");
            }
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  //   const handleGoogleSignIn = () => {
  //     signInWithGoogle()
  //       .then((result) => {
  //         console.log(result.user);
  //         setUser(result.user);
  //         toast.success("Logged in successfully!");
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         toast.error(error);
  //       });
  //   };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="py-10 flex justify-center items-center">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-md p-10 border">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <div className="border-b-[1px] mt-8"></div>
        <form className="card-body" onSubmit={handleSubmit}>
          <button
            // onClick={handleGoogleSignIn}
            className="btn btn-outline"
            type="button"
          >
            <FcGoogle /> Login with Google
          </button>
          {/* name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>

          {/* email input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <button
                className="btn btn-sm absolute right-2 top-2"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-md">Sign Up</button>
          </div>
        </form>
        <p className="2xl:font-semibold text-center">
          {`Already Have An Account? `}
          <Link className="text-red-500" to="/signin">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
