import Link from "next/link";

import useLocalStorage from "../../hooks/useLocalStorage.js";

const FolderItem = ({ folder, handleGetSubFolders }) => {
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
          onClick={e => handleGetSubFolders(e)}
        >
          <path
            d="M16 10l-4 4-4-4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="inline-flex">
          <svg
            className="h-5 w-5 fill-current text-gray-700"
            viewBox="0 0 60 60"
          >
            <path d="M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z" />
            <path d="M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z" />
            <path d="M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z" />
          </svg>
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
