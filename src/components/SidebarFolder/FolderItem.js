import Link from "next/link";

import { FolderIcon } from "../Icons/Icons.js";

import useLocalStorage from "../../hooks/useLocalStorage.js";

const FolderItem = ({
  folder,
  handleGetSubFolders,
  showSubFolders,
  setShowSubFolders
}) => {
  const { set } = useLocalStorage();

  const handleBreadcrumbs = () => {
    // Handles setting the clicked folder as root folder in breadcrumbs section
    set("crumbs", [{ _id: folder._id, title: folder.title }]);
  };

  return (
    <Link as={`/${folder._id}`} href={"/[folderId]"}>
      <a
        data-type="folder"
        data-id={folder._id}
        className="-mx-3 px-3 py-2 flex items-center text-sm font-medium hover:bg-gray-200"
        onClick={handleBreadcrumbs}
      >
        <svg
          className="-ml-3 h-6 w-6 stroke-current text-gray-400 hover:text-black"
          viewBox="0 0 24 24"
          fill="none"
          onClick={e => {
            handleGetSubFolders(e);
            setShowSubFolders(state => !state);
          }}
        >
          <path
            d="M16 10l-4 4-4-4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="inline-flex">
          <FolderIcon
            classList="h-5 w-5 fill-current text-gray-700"
            folderCount={folder.folderCount}
            bookmarkCount={folder.bookmarkCount}
            showSubFolders={showSubFolders}
          />
          <span
            onClick={handleBreadcrumbs}
            data-type="folder"
            data-id={folder._id}
            className="ml-2 text-gray-900"
          >
            {folder.title}
          </span>
        </span>
      </a>
    </Link>
  );
};

export default FolderItem;
