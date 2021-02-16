import { useEffect, useState } from "react";

import { getSidebarContent } from "../../drivers/backend.driver.js";

import SidebarFolder from "../SidebarFolder/SidebarFolder.js";
import SidebarBookmark from "../SidebarBookmark/SidebarBookmark.js";

const Sidebar = () => {
  const [folders, setFolders] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { folders, bookmarks } = await getSidebarContent({});
        setFolders(folders);
        setBookmarks(bookmarks);
      } catch (error) {
        console.warn("Error while fetching Sidebar Folders: ", error);
      }
    })();
  }, []);

  return (
    <nav className="w-64 p-6 bg-gray-100 overflow-y-auto">
      <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
        Folders
      </h2>
      <div className="mt-3">
        {folders &&
          folders.map((folder, i) => <SidebarFolder key={i} folder={folder} />)}
      </div>
      <h2 className="mt-10 text-xs font-semibold text-gray-600 uppercase tracking-wide">
        Bookmarks
      </h2>
      <div className="mt-3">
        {bookmarks &&
          bookmarks.map((bookmark, i) => (
            <SidebarBookmark key={i} bookmark={bookmark} />
          ))}
      </div>
    </nav>
  );
};

export default Sidebar;
