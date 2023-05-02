import Link from "next/link";
import { useStoreState } from "easy-peasy";

import Folder from "../Folder/Folder.js";
import Bookmark from "../Bookmark/Bookmark.js";
import Footer from "../Footer/Footer.js";
import { sort } from "../../helpers/helpers.js";
import HomeItemsTable from "../HomeItemsTable/HomeItemsTable.js";
import HomeStats from "../HomeStats/HomeStats.js";

const HomeContent = () => {
  const { sidebar } = useStoreState((state) => state);

  return (
    <>
      <div className="flex justify-between p-3">
        <HomeStats
          type="folder"
          title="Total Folders"
          elementTitle="Total number of folders."
          totalItems={sidebar.totalFolders}
        />
        <HomeStats
          type="bookmark"
          title="Total Bookmarks"
          elementTitle="Total number of bookmarks."
          totalItems={sidebar.totalBookmarks}
        />
        <HomeStats
          type="folder"
          title="New Folders"
          elementTitle="Number of new folders created in last 7 days."
          totalItems={sidebar.newFolders}
        />
        <HomeStats
          type="bookmark"
          title="New Bookmarks"
          elementTitle="Number of new bookmarks created in last 7 days."
          totalItems={sidebar.newBookmarks}
        />
      </div>
      <div className="flex">
        <HomeItemsTable
          title={"Recent folders"}
          headings={[
            "Title",
            "Path",
            "Sub-folders",
            "Bookmarks",
            "Created",
            "Modified"
          ]}
          folders={sidebar.recentFolders}
        />
        <HomeItemsTable
          title={"Recent bookmarks"}
          headings={["Title", "Path", "Created", "Modified"]}
          bookmarks={sidebar.recentBookmarks}
        />
      </div>
      <div className="flex">
        <HomeItemsTable
          title={"Root folders"}
          headings={[
            "Title",
            "Path",
            "Sub-folders",
            "Bookmarks",
            "Created",
            "Modified"
          ]}
          folders={sidebar.rootFolders?.sort(sort)}
        />
        <HomeItemsTable
          title={"Root bookmarks"}
          headings={["Title", "Path", "Created", "Modified"]}
          bookmarks={sidebar.rootBookmarks}
        />
      </div>
      <div
        className="flex h-full flex-1 flex-col flex-wrap overflow-x-auto p-3"
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
        folderCount={sidebar.rootFolders?.length}
        bookmarkCount={sidebar.rootBookmarks?.length}
      />
    </>
  );
};

export default HomeContent;
