import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { use, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {
    signInWithEmailAndPasswordFunc,
    signOutFunc,
    signInWithPopupGitFunc,
    signInWithPopup,
    user,
    setUser,
    loading,
    setLoading,
  } = use(AuthContext);

  const [show, setShow] = useState(false);
  const ref = useRef(null);
 
  if(user){
    navigate('/')
    return;
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false)
        console.log(res);
        if (!res.user?.emailVerified) {
          toast.error("Your account is not varified");
          return;
        }
        toast("sign In Successfull");
        setUser(res.user);
        navigate(location.state? location.state:'/')
      })
      .catch((e) => {
        console.log(e);
        toast(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup()
      .then((res) => {
        setLoading(false)
        console.log(res?.user);
        toast("Google Sign In");
        setUser(res?.user);
        navigate(location.state? location.state:'/')
      })
      .catch((e) => {
        console.log(e.message);
        toast(e.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopupGitFunc()
      .then((res) => {
        setLoading(false)
        console.log(res?.user);
        toast("github Sign In");
        setUser(res?.user);
        navigate(location.state || '/')
      })
      .catch((e) => {
        console.log(e.message);
        toast(e.message);
      });
  };
  const handleForgetPass = () => {
    const email = ref.current.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false)
        // Password reset email sent!
        // ..
        toast("reset password");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage, errorCode);
      });
  };
  return (
    <div className="flex md:w-6xl mx-auto gap-3 items-center ">
      <div className="py-20">
        <h1 className="text-xl font-semibold">This is Login page</h1>
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
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  ref={ref}
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
                <button className="" onClick={handleForgetPass}>
                  <a className="link link-hover">Forgot password?</a>
                </button>
                <button className="btn btn-neutral mt-4">Login</button>
                <div className="flex items-center justify-center gap-3">
                  <div className="border-t w-20"></div>
                  <div className="font-bold">or</div>
                  <div className="border-t w-20"></div>
                </div>
                {/* Google */}
                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                {/* github */}
                {/* GitHub */}
                <button
                  onClick={handleGithubSignIn}
                  className="btn bg-black text-white border-black"
                >
                  <svg
                    aria-label="GitHub logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    ></path>
                  </svg>
                  Login with GitHub
                </button>
              </fieldset>
              <p>
                You are new in this page?Please{" "}
                <NavLink
                  to="/signUp"
                  className="text-black font-bold underline"
                >
                  SignUP
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignIn;
