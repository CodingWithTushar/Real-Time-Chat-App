import React from "react";
import { useAuth } from "../hooks/useAuth";
import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowLeftStartOnRectangleIcon, CogIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { logout, authUser } = useAuth();

  return (
    <>
      <header className="border-b border-gray-300 fixed w-full top-0 h-13  backdrop-blur-lg ">
        <div className="flex items-center justify-around">
          <div className="">
            <ChatBubbleLeftRightIcon className="w-12 h-12 cursor-pointer hover:text-gray-500" />
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center hover:text-gray-500">
            <CogIcon className="w-10 h-10 cursor-pointer  " />
            <button className="hidden sm:inline font-semibold text-lg">
              <Link to="/setting" >
            Settings
              </Link>
            </button>
            </div>
            <div className="flex items-center justify-center hover:text-gray-500">
            <UserCircleIcon className="w-10 h-10 cursor-pointer  " />
            <button className="font-semibold text-lg">
              <Link to="/profile" >
            Profile
              </Link>
            </button>
            </div>
            <div className="flex items-center justify-center hover:text-gray-500">
            <ArrowLeftStartOnRectangleIcon className="w-10 h-10 cursor-pointer  " />
            <button className="font-semibold text-lg" onClick={logout}>
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
