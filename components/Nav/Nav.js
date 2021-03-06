import Image from "next/image";
// import Link from "next/link";
import { useContext } from "react";
import Catagories from "./Catagories/Catagories";
import Search from "./Search";
import StateContext from "../context/State";
import Dropdown from "./Dropdown";
import Link from "../Link";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../store/form-slice";

export default function Nav() {
  const ctx = useContext(StateContext);
  const loggedIn = useSelector((state) => state.form.loggedIn);
  const dispatch = useDispatch();

  const dropdownClass = !ctx.showDropdown ? "hidden" : "";
  return (
    <div className=" relative">
      <nav className=" bg-gray-100  items-center  lg:h-26 ">
        <div className="lg:flex py-4 h-26 items-center">
          <div className="flex items-center lg:w-7/12 ">
            <div className="flex h-10  items-center ml-2 mr-2 cursor-move sm:ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
<h2 className="md:text-xl sm:text-lg text-xs">GO-SHOP</h2>
            </div>
            <div className="mx-auto  ">
              <Cart />
            </div>
            <div className="w-24 sm:w-auto mr-2 relative sm:mx-auto">
              <Search />
            </div>

            <div className="lg:hidden sm:mr-2  mr-2">
              <Dropdown />
            </div>
          </div>

          <div
            className={`${dropdownClass} absolute lg:static inset-y-0 right-0  lg:bg-transparent bg-gray-300  translate-x-0   lg:block  transition-transform duration-700 ease-in-out sm:px-6 md:w-64 md:px-8 lg:px-0 lg:w-auto lg:ml-auto `}
          >
            <div className="flex  mr-3 sm:w-56 sm:h-20 lg:hidden">
             
              <button
                className="ml-auto mr-4 mt-4"
                type="button"
                onClick={ctx.toggleDropdownHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className=" lg:bg-gray-100 bg-gray-300 relative z-50 sm:-ml-6 sm:-mr-4 md:-ml-8 md:-mr-8 lg:ml-0 lg:mr-0 rounded-lg">
              <ul className="lg:space-x-4 lg:ml-auto lg:mr-4 block  lg:space-y-0 space-y-2 ml-6  sm:space-y-4 lg:flex lg:pb-0 pb-10 lg:pt-0 pt-4">
                <li className="">
                  <Link href="/" activeClassName="text-santas-gray-400 ">
                    <a className="text-gray-700 font-serif  hover:text-gray-800 lg:text-lg text-lg sm:text-xl ">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Catagories />
                </li>

                <li className="">
                  <Link href="/orders" activeClassName="text-santas-gray-400 ">
                    <a className="text-gray-700 font-serif hover:text-gray-800 lg:text-lg text-lg sm:text-xl ">
                      Orders
                    </a>
                  </Link>
                </li>
                {!loggedIn && (
                  <li className="">
                    <Link href="/login" activeClassName="text-santas-gray-400 ">
                      <a className="text-gray-700 font-serif hover:text-gray-800 lg:text-lg text-lg sm:text-xl ">
                        Log In
                      </a>
                    </Link>
                  </li>
                )}
                {loggedIn && (
                  <li className="">
                    <button
                      className="text-gray-700 font-serif hover:text-gray-800 lg:text-lg text-lg sm:text-xl  "
                      onClick={() => dispatch(formActions.logOut())}
                    >
                      Log Out
                    </button>
                  </li>
                )}
                {!loggedIn && (
                  <li className="">
                    <Link
                      href="/signup"
                      activeClassName="text-santas-gray-400 "
                    >
                      <a className="text-gray-700 font-serif hover:text-gray-800 lg:text-lg text-lg sm:text-xl  ">
                        Sign Up
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
