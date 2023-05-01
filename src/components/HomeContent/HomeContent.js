import Link from "next/link";
import { useStoreState } from "easy-peasy";

import Folder from "../Folder/Folder.js";
import Bookmark from "../Bookmark/Bookmark.js";
import Footer from "../Footer/Footer.js";
import { sort } from "../../helpers/helpers.js";
import HomeFolderList from "../HomeFolderList/HomeFolderList.js";

const HomeContent = () => {
  const { sidebar } = useStoreState((state) => state);
  return (
    <>
      <div className="flex">
        <HomeFolderList
          title={"Root folders"}
          headings={[
            "Title",
            "Path",
            "Sub-folders",
            "Bookmarks",
            "Created",
            "Modified",
          ]}
          folders={sidebar.folders?.sort(sort)}
        />
        <HomeFolderList
          title={"Root bookmarks"}
          headings={["Title", "Path", "Created", "Modified"]}
          bookmarks={sidebar.bookmarks}
        />
      </div>
      <div
        className="flex-1 p-3 overflow-x-auto flex flex-col flex-wrap h-full"
        // className="flex-1 p-3 overflow-x-auto flex flex-wrap h-full"
        // onDragOver={e => e.preventDefault()} // Required for drag and drop to function
        // onDrop={e => handleDrop(e)}
      >
        {/* {sidebar.folders?.sort(sort).map((folder) => (
          <Folder key={folder._id} folder={folder} />
        ))}
        {sidebar.bookmarks?.sort(sort).map((bookmark) => (
          <Bookmark key={bookmark._id} bookmark={bookmark} />
        ))} */}
      </div>
      <Footer
        folderCount={sidebar.folders?.length}
        bookmarkCount={sidebar.bookmarks?.length}
      />
    </>
  );
};

export default HomeContent;
