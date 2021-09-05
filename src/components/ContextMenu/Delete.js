import { BookmarkIcon, FolderIcon } from "../Icons/Icons";

import { deleteFolder, deleteBookmark } from "../../drivers/backend.driver.js";

const Delete = ({ id, type, text }) => {
  const deleteFunction = type === "folder" ? deleteFolder : deleteBookmark;

  const handleDeleteFolder = async e => {
    e.preventDefault();

    try {
      const res =
        confirm(`Are you sure you want to delete ${type} ${text}?`) &&
        (await deleteFunction({ param: id }));
      res &&
        document
          .querySelectorAll(`[data-id="${id}"]`)
          .forEach(element => (element.style.display = "none"));
    } catch (error) {
      console.warn("Error deleting folder: ", error);
    }
  };

  return (
    <a
      href="#"
      className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white"
      onClick={handleDeleteFolder}
    >
      {type === "folder" ? (
        <FolderIcon
          classList="items-centere h-5 w-5 fill-current text-gray-800 hover:text-white"
          showSubFolders={true}
        />
      ) : (
        <BookmarkIcon classList="items-centere h-5 w-5 fill-current text-gray-800 hover:text-white" />
      )}
      <span className="flex-1 px-4">
        Delete {type && type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    </a>
  );
};

export default Delete;
