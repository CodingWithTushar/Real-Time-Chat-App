import React from "react";
import { useAuth } from "../hooks/useAuth";
import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowLeftStartOnRectangleIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { logout, authUser } = useAuth();

  return (
    <>
      <header className="border-b border-gray-300 fixed w-full top-0 h-13  backdrop-blur-lg ">
        <div className="flex items-center justify-around ">
          <Link to={"/"}>
          <div className="" >
            <ChatBubbleLeftRightIcon className="w-12 h-12 cursor-pointer hover:text-gray-500 " />
          </div>
          </Link>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center justify-center hover:text-gray-500 ">
                <Link to="/setting" className="flex items-center justify-center">
              <CogIcon className="w-8 cursor-pointer  " />
              <button className="hidden sm:inline font-semibold text-lg cursor-pointer">
                Settings
              </button>
                </Link>
            </div>
            <div className="flex items-center justify-center hover:text-gray-500 ">
              <Link to="/profile" className="flex">
                <UserCircleIcon className="w-8 cursor-pointer " />
                <button className="font-semibold text-lg hidden sm:inline cursor-pointer">
                  Profile
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center hover:text-gray-500 ">
              <ArrowLeftStartOnRectangleIcon className="w-8 cursor-pointer  " />
              <button
                className="font-semibold text-lg hidden sm:inline cursor-pointer"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
