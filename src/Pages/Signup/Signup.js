import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err=>console.error(err));
      };

  return (
    <div className="hero bg-gray-700">
      <div className="hero-content w-3/4 flex-col">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <div className="card px-10 sm:w-full md:w-3/4 lg:w-3/4 mb-6 shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center">
            Already have an account? Please,{" "}
            <Link className="text-orange-600 font-bold" to="/login" href="">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
