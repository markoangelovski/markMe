import useDataUpdates from "../../hooks/useDataUpdates.js";

import SidebarFolder from "../SidebarFolder/SidebarFolder.js";
import SidebarBookmark from "../SidebarBookmark/SidebarBookmark.js";

const Sidebar = () => {
  const { folders, bookmarks } = useDataUpdates();

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
