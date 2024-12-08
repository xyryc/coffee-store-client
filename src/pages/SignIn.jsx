import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        // update last login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`https://coffee-store-server-psi-ochre.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("signin info updated in db", data);
          });
      })
      .catch((error) => console.log(error.message));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // console.log("show pass", showPassword);
  };

  const handleForgetPassword = () => {
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className="flex justify-center items-center py-10">
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-md p-10 border">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <div className="border-b-[1px] mt-8"></div>

        <form onSubmit={handleSubmit} className="card-body ">
          <button
            // onClick={handleGoogleSignIn}
            className="btn btn-outline"
            type="button"
          >
            <FcGoogle /> Login with Google
          </button>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              onChange={(e) => setEmail(e.target.value)}
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
            <label className="label">
              <button
                onClick={handleForgetPassword}
                className="label-text-alt link link-hover"
                type="button"
              >
                Forgot password?
              </button>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-md">Sign In</button>
          </div>
        </form>
        <p className="2xl:font-semibold text-center">
          {`Don't Have An Account? `}
          <Link className="text-red-500" to="/signup">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
