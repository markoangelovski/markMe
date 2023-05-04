import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import SidebarFolder from "../SidebarFolder/SidebarFolder.js";
import SidebarBookmark from "../SidebarBookmark/SidebarBookmark.js";
import { sort } from "../../helpers/helpers.js";

const Sidebar = () => {
  const { sidebar } = useStoreState((state) => state);
  const { fetchSidebarContent } = useStoreActions((actions) => actions);

  useEffect(() => {
    // Fetch Sidebar contents
    fetchSidebarContent();
  }, []);

  return (
    <nav className="w-64 overflow-y-auto bg-gray-100 p-6">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
        Folders
      </h2>
      <div className="mt-3">
        {sidebar?.rootFolders?.sort(sort).map((folder) => (
          <SidebarFolder key={folder._id} folder={folder} />
        ))}
      </div>
      <h2 className="mt-10 text-xs font-semibold uppercase tracking-wide text-gray-600">
        Bookmarks
      </h2>
      <div className="mt-3">
        {sidebar?.rootBookmarks?.sort(sort).map((bookmark) => (
          <SidebarBookmark key={bookmark._id} bookmark={bookmark} />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
