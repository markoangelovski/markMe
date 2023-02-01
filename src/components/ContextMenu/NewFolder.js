import { FolderIcon } from "../Icons/Icons";

const NewFolder = ({ setShowModal }) => {
  return (
    <a
      href="#"
      className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white"
      onClick={e => {
        e.preventDefault();
        setShowModal(true);
      }}
    >
      <FolderIcon
        classList="items-centere h-5 w-5 fill-current text-gray-800 hover:text-white"
        showSubFolders={true}
      />
      <span className="flex-1 px-4">New Folder</span>
    </a>
  );
};

export default NewFolder;
