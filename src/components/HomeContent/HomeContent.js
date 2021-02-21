import { useEffect, useState } from "react";

import { useGlobalState } from "../../hooks/GlobalContext.js";

import Folder from "../Folder/Folder.js";
import Bookmark from "../Bookmark/Bookmark.js";
import Footer from "../Footer/Footer.js";

const HomeContent = () => {
  const [displayFolders, setDisplayFolders] = useState([]);
  const { folders, bookmarks, addedNewSidebarFolder } = useGlobalState();

  useEffect(() => {
    setDisplayFolders(folders); // Sets up the standard folders to be displayed. Happens when we access the folders via GET
  }, [folders]);

  useEffect(() => {
    addedNewSidebarFolder.length && setDisplayFolders(addedNewSidebarFolder); // Sets up the folders to be re fetched after a new folder has been added. Happens when we create a new folder via POST
  }, [addedNewSidebarFolder]);

  return (
    <>
      <div
        className="flex-1 p-3 overflow-x-auto flex flex-col flex-wrap h-full"
        // onDragOver={e => e.preventDefault()} // Required for drag and drop to function
        // onDrop={e => handleDrop(e)}
      >
        {displayFolders
          ? displayFolders.map(folder => (
              <Folder key={folder._id} folder={folder} />
            ))
          : null}
        {bookmarks
          ? bookmarks.map(bookmark => (
              <Bookmark key={bookmark._id} bookmark={bookmark} />
            ))
          : null}
      </div>
      <Footer folderCount={folders.length} bookmarkCount={bookmarks.length} />
    </>
  );
};

export default HomeContent;
