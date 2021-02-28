import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  getSidebarContent,
  getFolderContents,
  newBookmark,
  newFolder,
  getBookmarkMetadata
} from "../drivers/backend.driver.js";

export const useGetSidebarContent = () => {
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

export const useGetFolderContents = () => {
  const [folder, setFolder] = useState([]);

  const router = useRouter();
  const { folderId } = router.query;

  useEffect(() => {
    (async () => {
      try {
        const res = folderId && (await getFolderContents({ param: folderId }));
        res && setFolder(res.folder);
      } catch (error) {
        console.warn("Error fetching folder contents: ", error);
      }
    })();
  }, [folderId]);

  return { folder };
};

export const useNewBookmark = () => {
  const [addedNewBookmark, setUpdatedFolder] = useState({});
  const [showNewBookmarkModal, setShowNewBookmarkModal] = useState(false);

  const router = useRouter();
  const { folderId } = router.query;

  const newBookmarkHook = async body => {
    try {
      const res = body.url?.length && (await newBookmark({ body }));

      // Wait for a second for the bookmark to be stored in DB before refetching
      res.message &&
        setTimeout(async () => {
          const res =
            folderId && (await getFolderContents({ param: folderId }));
          res && setUpdatedFolder(res.folder);
        }, 1000);
    } catch (error) {
      console.warn("Error creating a new bookmark: ", error);
    }
  };

  return {
    addedNewBookmark,
    newBookmarkHook,
    showNewBookmarkModal,
    setShowNewBookmarkModal
  };
};

export const useNewFolder = () => {
  const [addedNewSubFolder, setAddedNewSubFolder] = useState({});
  const [addedNewSidebarFolder, setAddedNewSidebarFolder] = useState([]);

  const router = useRouter();
  const { folderId } = router.query;

  const newFolderHook = async body => {
    try {
      const res = await newFolder(body);

      // Wait for a second for the folder to be stored in DB before refetching
      res.status === 201 &&
        setTimeout(async () => {
          const subFolder =
            folderId && (await getFolderContents({ param: folderId }));
          subFolder && setAddedNewSubFolder(subFolder.folder);

          const sidebarFolder = !folderId && (await getSidebarContent({}));

          sidebarFolder && setAddedNewSidebarFolder(sidebarFolder.folders);
        }, 1000);
    } catch (error) {
      console.warn("Error creating a new folder: ", error);
    }
  };

  return { addedNewSubFolder, addedNewSidebarFolder, newFolderHook };
};

export const useGetBookmarkMetadata = () => {
  const [metadata, setMetadata] = useState({});

  const getMetadataHook = async url => {
    try {
      const res =
        url?.length && (await getBookmarkMetadata({ query: { url } }));

      res && setMetadata(res);
    } catch (error) {
      console.warn("Error creating a new bookmark: ", error);
    }
  };

  return { metadata, getMetadataHook };
};
