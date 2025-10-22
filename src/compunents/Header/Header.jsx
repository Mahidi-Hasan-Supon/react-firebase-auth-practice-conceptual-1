import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Header = () => {
  const { user, setUser, signOutFunc,loading} = use(AuthContext);
  const handleSignOut = () => {
    signOutFunc()
      .then((res) => {
        console.log(res);
        toast("signout successfull");
        setUser(null);
      })
      .catch((e) => {
        console.log(e);
        toast(e.message);
      });
  };
  return (
    <div className="bg-green-200 py-2 shadow">
      <div className="flex items-center md:justify-between md:w-6xl mx-auto gap-3">
        <div>
          <h1 className="text-xl font-bold text-green-500">Registation</h1>
        </div>
        <div className="flex gap-3 font-semibold">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-500 underline" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-500 underline" : ""
            }
            to="/aboutus"
          >
            About us
          </NavLink>
        {user&&<NavLink
          className={({ isActive }) =>
            isActive ? "text-green-500 underline" : ""
          }
          to="/profile"
        >
          Profile
        </NavLink>}
        </div>
        
       {loading?(<p>Loading..</p>)  : <div> { user ?  (
            <div>
              <div className="space-y-2 text-center">
                {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                {/* For TSX uncomment the commented types below */}
                <button
                  className="btn"
                  popoverTarget="popover-1"
                  style={
                    { anchorName: "--anchor-1" } /* as React.CSSProperties */
                  }
                >
                   <img src={user?.photoURL} className="h-[50px] w-[50px] rounded-2xl mx-auto" alt="" />
                </button>

                <ul
                  className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                  popover="auto"
                  id="popover-1"
                  style={
                    {
                      positionAnchor: "--anchor-1",
                    } /* as React.CSSProperties */
                  }
                >
                 
                  <h1 className="text-xl font-bold">{user?.displayName}</h1>
                  <p>{user?.email}</p>
                  <button onClick={handleSignOut} className="btn">
                    Sign out
                  </button>
                </ul>
              </div>
            </div>
          ) : (
            <Link to='/signIn' className="btn bg-green-600 text-amber-50">sign in</Link>
          )}
          </div>
          }
          </div>
    </div>
  );
};

export default Header;
