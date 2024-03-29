import Link from "next/link";

import { sevenDaysAgo } from "../../../constants/constants";

import { FolderIcon, IconForNew } from "../Icons/Icons.js";

const FolderItem = ({
  folder,
  handleGetSubFolders,
  showSubFolders,
  setShowSubFolders
}) => {
  const isFolderNew = new Date(folder.createdAt) > sevenDaysAgo;

  return (
    <Link href={`/#${folder.path}`}>
      <a
        data-type="folder"
        data-id={folder._id}
        className="-mx-3 flex whitespace-pre px-3 py-2 text-sm font-medium hover:bg-gray-200"
      >
        <svg
          className="-ml-3 h-6 w-6 flex-shrink-0 stroke-current text-gray-400 hover:text-black"
          viewBox="0 0 24 24"
          fill="none"
          onClick={(e) => {
            handleGetSubFolders(e);
            setShowSubFolders((state) => !state);
          }}
        >
          <path
            d="M16 10l-4 4-4-4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="relative inline-flex">
          <FolderIcon
            classList="h-5 w-5 fill-current text-gray-700"
            folderCount={folder.folderCount}
            bookmarkCount={folder.bookmarkCount}
            showSubFolders={showSubFolders}
          />
          {isFolderNew && (
            <IconForNew classList={"w-4 absolute -top-1 left-3"} />
          )}
          <span
            data-type="folder"
            data-id={folder._id}
            className="mx-2 text-gray-900"
          >
            {folder.title}
          </span>
        </span>
      </a>
    </Link>
  );
};

export default FolderItem;
