import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getFolderContents } from "../../drivers/backend.driver.js";

import Layout from "../../components/Layout/Layout.js";
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
    <Layout title={folder && folder.title}>
      <FolderContent folder={folder} setReFetch={setReFetch} />
    </Layout>
  );
};

export default Folder;
