import { FolderIcon } from "../Icons/Icons";

export const NewFolder = ({ id, type }) => {
  return (
    <a
      href="#"
      className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white"
      onClick={e => {
        e.preventDefault();
        window.location.search = `id=${id}&type=${type}`;
      }}
    >
      <FolderIcon classList="items-centere h-5 w-5 fill-current text-gray-800 hover:text-white" />
      <span className="flex-1 px-4">New Folder</span>
    </a>
  );
};
