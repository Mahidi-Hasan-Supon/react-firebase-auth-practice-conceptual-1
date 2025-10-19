import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { NavLink } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!pattern.test(password)) {
      toast.error(
        "⚠️ Password must have at least 6 chars, 1 uppercase, 1 lowercase & 1 number!"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("SignUp account");
      })
      .catch((e) => {
        console.log(e.message);
        if (e.code === "auth/email-already-in-use") {
          toast.error("❌ This email is already registered!");
        } else if (e.code === "auth/invalid-email") {
          toast.error("❌ Invalid email address!");
        } else if (e.code === "auth/weak-password") {
          toast.error("⚠️ Password should be at least 6 characters!");
        } else {
          toast.error("Something went wrong! Please try again.");
        }
        toast.error(e.message);
      });
  };
  return (
    <div className="flex md:w-6xl mx-auto gap-3 items-center ">
      <div className="py-20">
        <h1 className="text-xl font-semibold">This is Sign Up page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Voluptatibus dolorum voluptatem, praesentium non consequuntur eum
          consequatur modi <br />
          vero cumque quia nihil at tempora quos iste. Reiciendis debitis fuga
          modi sequi?
        </p>
      </div>
      <div>
        <div className="card bg-green-500 w-100 shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <div className="relative">
                  <label className="label">Password</label>

                  <input
                    type={show ? "text" : "password"}
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute top-8 right-10"
                  >
                    {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <p>
                Sign up?Please{" "}
                <NavLink
                  to="/signIn"
                  className="text-black font-bold underline"
                >
                  Sign In
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
