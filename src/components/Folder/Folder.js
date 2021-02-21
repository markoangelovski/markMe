import Link from "next/link";
import { useEffect } from "react";

import { FolderIcon } from "../Icons/Icons";

const Folder = ({ folder }) => {
  const handleClick = () => {
    const crumbs = JSON.parse(localStorage.getItem("crumbs")) || [];
    localStorage.setItem(
      "crumbs",
      JSON.stringify([...crumbs, { _id: folder._id, title: folder.title }])
    );
  };

  useEffect(() => {
    const onpopstate = e => {
      const crumbs = JSON.parse(localStorage.getItem("crumbs")) || [];
      const restCrumbs = crumbs.slice(0, crumbs.length - 1);
      localStorage.setItem("crumbs", JSON.stringify(restCrumbs));
    };

    window.onpopstate = onpopstate;

    return () => {
      window.removeEventListener("popstate", onpopstate);
    };
  }, []);

  return (
    <Link href={`/${folder._id}`}>
      <a
        onClick={handleClick}
        data-type="folder"
        data-id={folder._id}
        className="flex-shrink-0 flex items-center"
        draggable="true"
      >
        <FolderIcon classList="inline h-5 w-5 fill-current text-gray-700" />
        <span
          data-type="folder"
          data-id={folder._id}
          className="ml-2 py-1 pl-1 pr-2 text-sm whitespace-pre text-gray-900 hover:bg-gray-300"
        >
          {folder.title}
        </span>
      </a>
    </Link>
  );
};

export default Folder;
