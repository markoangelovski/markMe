import { useState } from "react";

import { getFolderContents } from "../../drivers/backend.driver";

import FolderItem from "./FolderItem";

const SidebarFolder = ({ folder }) => {
  const [folders, setFolders] = useState([]);

  const handleGetSubFolders = async e => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const res = await getFolderContents({
        param: `/${folder._id}/sub-folders`
      });

      res && setFolders(res.folders);
    } catch (error) {
      console.warn("Error fetching Sub-folders: ", error);
    }
  };
  console.log("folders: ", folders);
  return (
    <>
      <FolderItem folder={folder} handleGetSubFolders={handleGetSubFolders} />
      {folders.map((subFolder, i) => {
        console.log("subFolder: ", subFolder.title);

        <span>
          <FolderItem
            key={i}
            folder={subFolder}
            handleGetSubFolders={handleGetSubFolders}
          />
        </span>;
      })}
    </>
  );
};

export default SidebarFolder;
