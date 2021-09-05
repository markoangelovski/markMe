import { useStoreState } from "easy-peasy";

import Folder from "../Folder/Folder.js";
import Bookmark from "../Bookmark/Bookmark.js";
import Footer from "../Footer/Footer.js";

const HomeContent = () => {
  const { sidebar } = useStoreState(state => state);
  return (
    <>
      <div
        className="flex-1 p-3 overflow-x-auto flex flex-col flex-wrap h-full"
        // onDragOver={e => e.preventDefault()} // Required for drag and drop to function
        // onDrop={e => handleDrop(e)}
      >
        {sidebar.folders?.map(folder => (
          <Folder key={folder._id} folder={folder} />
        ))}
        {sidebar.bookmarks?.map(bookmark => (
          <Bookmark key={bookmark._id} bookmark={bookmark} />
        ))}
      </div>
      <Footer
        folderCount={sidebar.folders?.length}
        bookmarkCount={sidebar.bookmarks?.length}
      />
    </>
  );
};

export default HomeContent;
