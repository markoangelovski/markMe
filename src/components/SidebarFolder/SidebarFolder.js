import { useState } from "react";

import { getFolderContents } from "../../drivers/backend.driver";

import FolderItem from "./FolderItem";

const SidebarFolder = ({ folder }) => {
  const [folders, setFolders] = useState([]);
  const [showSubFolders, setShowSubFolders] = useState(false);

  const handleGetSubFolders = async e => {
    e.preventDefault();
    e.stopPropagation();

    try {
      // Fetch subfolders only if they were not fetched
      const subFolders =
        !folders.length &&
        (await getFolderContents({
          param: `${folder._id}/sub-folders`
        }));

      subFolders && setFolders(subFolders.folders);
    } catch (error) {
      console.warn("Error fetching Sub-folders: ", error);
    }
  };

  return (
    <>
      <FolderItem
        folder={folder}
        handleGetSubFolders={handleGetSubFolders}
        showSubFolders={showSubFolders}
        setShowSubFolders={setShowSubFolders}
      />
      {showSubFolders && (
        <div className="ml-4">
          {folders.map(subFolder => (
            <SidebarFolder key={subFolder._id} folder={subFolder} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarFolder;
