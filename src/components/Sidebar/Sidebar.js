import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import SidebarFolder from "../SidebarFolder/SidebarFolder.js";
import SidebarBookmark from "../SidebarBookmark/SidebarBookmark.js";

const Sidebar = () => {
  const { sidebar } = useStoreState(state => state);
  const { fetchSidebarContent } = useStoreActions(actions => actions);

  useEffect(() => {
    // Fetch Sidebar contents
    fetchSidebarContent();
  }, []);

  return (
    <nav className="w-64 p-6 bg-gray-100 overflow-y-auto">
      <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
        Folders
      </h2>
      <div className="mt-3">
        {sidebar?.folders?.map(folder => (
          <SidebarFolder key={folder._id} folder={folder} />
        ))}
      </div>
      <h2 className="mt-10 text-xs font-semibold text-gray-600 uppercase tracking-wide">
        Bookmarks
      </h2>
      <div className="mt-3">
        {sidebar?.bookmarks?.map(bookmark => (
          <SidebarBookmark key={bookmark._id} bookmark={bookmark} />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
