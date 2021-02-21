import useDataUpdates from "../../hooks/useDataUpdates.js";

import Folder from "../Folder/Folder.js";
import Bookmark from "../Bookmark/Bookmark.js";
import Footer from "../Footer/Footer.js";

const HomeContent = () => {
  const { folders, bookmarks } = useDataUpdates();

  return (
    <>
      <div
        className="flex-1 p-3 overflow-x-auto flex flex-col flex-wrap h-full"
        // onDragOver={e => e.preventDefault()} // Required for drag and drop to function
        // onDrop={e => handleDrop(e)}
      >
        {folders
          ? folders.map((folder, i) => <Folder key={i} folder={folder} />)
          : null}
        {bookmarks
          ? bookmarks.map((bookmark, i) => (
              <Bookmark key={i} bookmark={bookmark} />
            ))
          : null}
      </div>
      <Footer folderCount={folders.length} bookmarkCount={bookmarks.length} />
    </>
  );
};

export default HomeContent;
