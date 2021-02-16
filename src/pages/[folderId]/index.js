import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getFolderContents } from "../../drivers/backend.driver.js";

import Header from "../../components/Header/Header.js";
import FolderContent from "../../components/FolderContent/FolderContent.js";

const Folder = () => {
  const router = useRouter();
  const { folderId } = router.query;

  const [folder, setFolder] = useState(null);
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res =
          folderId && (await getFolderContents({ param: `/${folderId}` }));
        res && setFolder(res.folder);
      } catch (error) {
        console.warn("Error fetching folder contents: ", error);
      }
    })();
  }, [folderId, reFetch]);

  return (
    <>
      <Header>{<title>{folder ? folder.title : "Loading..."}</title>}</Header>
      <FolderContent folder={folder} setReFetch={setReFetch} />
    </>
  );
};

// Flag for rendering the page with or without global Layout. Used for not rendering Layout on Login
Folder.withLayout = true;

export default Folder;
