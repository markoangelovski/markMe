import { useGlobalState } from "../../hooks/GlobalContext.js";

import Folder from "../Folder/Folder";
import Bookmark from "../Bookmark/Bookmark";
import Footer from "../Footer/Footer";

const FolderContent = ({ folder }) => {
  const { setShowNewBookmarkModal, getMetadataHook } = useGlobalState();

  const handleDrop = async e => {
    e.preventDefault();

    const url = e.dataTransfer.getData("text/uri-list");

    // Displays the New Bookmark modal and form
    setShowNewBookmarkModal(true);

    // Fetches the metadata for a drag and dropped URL/link from other tab
    await getMetadataHook(url);
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
