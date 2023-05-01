import Link from "next/link";

import { FolderIcon } from "../Icons/Icons";

const Folder = ({ folder }) => {
  return (
    <div className="flex">
      <Link href={`/#${folder.path}`}>
        <a
          data-type="folder"
          data-id={folder._id}
          className="flex items-center hover:bg-gray-300"
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
            className="ml-2 py-1 pl-1 pr-2 text-sm whitespace-pre text-gray-900"
          >
            {folder.title}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Folder;
