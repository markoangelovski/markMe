import { useEffect, useState } from "react";
import Link from "next/link";

import useLocalStorage from "../../hooks/useLocalStorage.js";

import NavFileDropdown from "../NavFileDropdown/NavFileDropdown.js";
import NavEditDropdown from "../NavEditDropdown/NavEditDropdown.js";
import NavViewDropdown from "../NavViewDropdown/NavViewDropdown.js";

import Search from "../Search/Search.js";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const { get, set } = useLocalStorage();

  const formatUsername = username => {
    let first = username?.split("@")[0];
    first = first?.charAt(0).toUpperCase() + first?.slice(1);

    let second = username?.split("@")[1]?.split(".")[0];
    second = second?.charAt(0).toUpperCase() + second?.slice(1);

    return first + " " + second;
  };

  useEffect(() => {
    const user = get("markmeUserDetails");
    user && setUsername(user.username);
    user && setAvatar(user.avatar);
  }, []);

  return (
    <header className="flex flex-shrink-0">
      <div className="w-64 flex-shrink-0 px-4 py-3 bg-gray-800">
        <button className="w-full flex items-center">
          <Link as={"/"} href={"/"}>
            <a className="">
              {avatar ? (
                <img
                  onClick={() => set("crumbs", [])}
                  className="h-8 w-8 rounded-full object-cover"
                  src={avatar}
                />
              ) : null}
            </a>
          </Link>
          <span className="ml-4 mr-2 text-sm font-medium text-white">
            {username.length ? formatUsername(username) : null}
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
        <Search />
        <nav className="flex">
          <NavFileDropdown />
          <NavEditDropdown />
          <NavViewDropdown />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
