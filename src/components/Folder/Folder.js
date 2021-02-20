import Link from "next/link";

import { FolderIcon } from "../Icons/Icons";

const Folder = ({ folder }) => {
  return (
    <Link href={`/${folder._id}`}>
      <a className="flex-shrink-0 flex items-center" draggable="true">
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
