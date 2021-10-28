import { useState } from "react";
import Link from "next/link";

const NavViewDropdown = () => {
  const [visible, setVisible] = useState(false);

  return (
    <span>
      <a
        href="#"
        className="inline-block px-3 py-2 leading-none rounded-sm text-sm font-medium text-white hover:bg-gray-600"
        onClick={() => setVisible(vis => !vis)}
      >
        View
      </a>
      {visible && (
        <button
          className="absolute inset-0 h-full w-full cursor-default outline-none"
          onClick={() => setVisible(false)}
        ></button>
      )}
      <div
        className={`absolute right-1 w-48 py-2 bg-white rounded-sm shadow-xl ${
          visible ? "block" : "hidden"
        } `}
      >
        <Link href="/cheatsheet">
          <a
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-400"
            onClick={() => setVisible(false)}
          >
            Cheatsheet
          </a>
        </Link>
        {/* <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-400"
        >
          New Bookmark
        </a> */}
      </div>
    </span>
  );
};

export default NavViewDropdown;
