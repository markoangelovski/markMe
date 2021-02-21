import { useEffect, useState } from "react";

import { getSidebarContent } from "../drivers/backend.driver.js";

const useDataUpdates = () => {
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

  return { folders, bookmarks };
};

export default useDataUpdates;
