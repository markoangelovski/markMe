import { useEffect, useState } from "react";

import Header from "../../components/Header/Header.js";
import FolderContent from "../../components/FolderContent/FolderContent.js";
import { useGlobalState } from "../../hooks/GlobalContext.js";

const Folder = () => {
  const [displayFolder, setDisplayFolder] = useState({});
  const { folder, addedNewBookmark, addedNewSubFolder } = useGlobalState();

  useEffect(() => {
    setDisplayFolder(folder); // Sets up the standard folder to be displayed. Happens when we access the folder via GET
  }, [folder]);

  useEffect(() => {
    setDisplayFolder(addedNewBookmark); // Sets up the updated folder to be displayed. Happens when a new bookmark is created, re-fetches the folder contents after bookmark creation and displays them.
  }, [addedNewBookmark]);

  useEffect(() => {
    setDisplayFolder(addedNewSubFolder); // Sets up the updated folder to be displayed. Happens when a new sub folder is created, re-fetches the folder contents after sub folder creation and displays them.
  }, [addedNewSubFolder]);

  return (
    <>
      <Header>{<title>{displayFolder?.title || "Loading..."}</title>}</Header>
      <FolderContent folder={displayFolder} />
    </>
  );
};

// Flag for rendering the page with or without global Layout. Used for not rendering Layout on Login
Folder.withLayout = true;

export default Folder;
