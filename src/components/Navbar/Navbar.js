import { useEffect, useState } from "react";
import Link from "next/link";

import NavFileDropdown from "../NavFileDropdown/NavFileDropdown";
import NavEditDropdown from "../NavEditDropdown/NavEditDropdown";
import NavViewDropdown from "../NavViewDropdown/NavViewDropdown";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("markmeUserDetails"));
    user && setUsername(user.username);
    user && setAvatar(user.avatar);
  }, []);

  return (
    <header className="flex flex-shrink-0">
      <div className="w-64 flex-shrink-0 px-4 py-3 bg-gray-800">
        <button className="w-full flex items-center">
          <Link as={"/"} href={"/"}>
            <a className="">
              {avatar && (
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={avatar}
                />
              )}
            </a>
          </Link>
          <span className="ml-4 mr-2 text-sm font-medium text-white">
            {username}
          </span>
          <svg
            className="ml-auto h-6 w-6 stroke-current text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16 10l-4 4-4-4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-between px-6 bg-gray-700">
        <nav className="flex">
          <NavFileDropdown />
          <NavEditDropdown />
          <NavViewDropdown />
        </nav>
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              className="h-5 w-5 fill-current text-gray-500"
              viewBox="0 0 53.627 53.627"
            >
              <path d="M53.627 49.385L37.795 33.553C40.423 30.046 42 25.709 42 21 42 9.42 32.58 0 21 0S0 9.42 0 21s9.42 21 21 21c4.709 0 9.046-1.577 12.553-4.205l15.832 15.832 4.242-4.242zM2 21C2 10.523 10.523 2 21 2s19 8.523 19 19-8.523 19-19 19S2 31.477 2 21zm33.567 15.093c.178-.172.353-.347.525-.525.146-.151.304-.29.445-.445l14.262 14.262-1.415 1.415-14.261-14.263c.155-.141.293-.299.444-.444z" />
            </svg>
          </span>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="block pl-9 pr-4 py-2 w-full bg-gray-900 rounded-sm text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
