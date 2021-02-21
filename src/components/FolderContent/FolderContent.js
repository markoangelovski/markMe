import { useGlobalState } from "../../hooks/GlobalContext.js";

import Folder from "../Folder/Folder";
import Bookmark from "../Bookmark/Bookmark";
import Footer from "../Footer/Footer";

const FolderContent = ({ folder }) => {
  const { newBookmarkHook } = useGlobalState();

  const handleDrop = async e => {
    e.preventDefault();

    // Creates a new Bookmark for a drag and drop URL/link from other tab
    const url = e.dataTransfer.getData("text/uri-list");
    newBookmarkHook(url);
  };

  return (
    <>
      <div
        className="flex-1 p-3 overflow-x-auto flex flex-col flex-wrap h-full"
        onDragOver={e => e.preventDefault()} // Required for drag and drop to function
        onDrop={e => handleDrop(e)}
      >
        {folder
          ? folder.folders?.map((folder, i) => (
              <Folder key={folder._id} folder={folder} />
            ))
          : null}
        {folder
          ? folder.bookmarks?.map((bookmark, i) => (
              <Bookmark key={bookmark._id} bookmark={bookmark} />
            ))
          : null}
      </div>
      <Footer
        folderCount={folder ? folder.folderCount : 0}
        bookmarkCount={folder ? folder.bookmarkCount : 0}
      />
    </>
  );
};

export default FolderContent;
