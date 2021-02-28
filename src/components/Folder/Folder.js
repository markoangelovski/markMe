import Link from "next/link";
import { useEffect, useState } from "react";

import useLocalStorage from "../../hooks/useLocalStorage.js";

import { FolderIcon } from "../Icons/Icons";

const Folder = ({ folder }) => {
  const { get, set } = useLocalStorage();

  const handleClick = () => {
    const crumbs = get("crumbs") || [];
    set("crumbs", [...crumbs, { _id: folder._id, title: folder.title }]);
  };

  return (
    <Link href={`/${folder._id}`}>
      <a
        onClick={handleClick}
        data-type="folder"
        data-id={folder._id}
        className="flex-shrink-0 flex items-center"
        draggable="true"
      >
        <FolderIcon
          classList="inline h-5 w-5 fill-current text-gray-700"
          folderCount={folder.folderCount}
          bookmarkCount={folder.bookmarkCount}
          showSubFolders={false}
        />
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
