import Link from "next/link";

import { FolderIcon, IconForNew } from "../Icons/Icons";
import { sevenDaysAgo } from "../../../constants/constants";

const Folder = ({ folder }) => {
  const isFolderNew = new Date(folder.createdAt) > sevenDaysAgo;

  return (
    <div className="flex">
      <Link href={`/#${folder.path}`}>
        <a
          data-type="folder"
          data-id={folder._id}
          className="relative flex items-center hover:bg-gray-300"
          draggable="true"
        >
          <FolderIcon
            classList="inline h-5 w-5 fill-current text-gray-700"
            folderCount={folder.folderCount}
            bookmarkCount={folder.bookmarkCount}
            showSubFolders={false}
          />
          {isFolderNew && (
            <IconForNew classList={"w-4 absolute top-0 left-3"} />
          )}
          <span
            data-type="folder"
            data-id={folder._id}
            className="ml-2 whitespace-pre py-1 pl-1 pr-2 text-sm text-gray-900"
          >
            {folder.title}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Folder;
