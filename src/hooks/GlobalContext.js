import { createContext, useContext } from "react";

import {
  useGetSidebarContent,
  useGetFolderContents,
  useNewBookmark,
  useNewFolder,
  useGetBookmarkMetadata
} from "./useDataFetching";

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export const GlobalContextProvider = ({ children }) => {
  const { folders, bookmarks } = useGetSidebarContent();
  const { folder } = useGetFolderContents();
  const {
    addedNewBookmark,
    newBookmarkHook,
    showNewBookmarkModal,
    setShowNewBookmarkModal
  } = useNewBookmark();
  const {
    addedNewSubFolder,
    addedNewSidebarFolder,
    newFolderHook
  } = useNewFolder();
  const { metadata, getMetadataHook } = useGetBookmarkMetadata();

  return (
    <GlobalStateContext.Provider
      value={{
        folders,
        bookmarks,
        folder,
        addedNewBookmark,
        newBookmarkHook,
        showNewBookmarkModal,
        setShowNewBookmarkModal,
        addedNewSubFolder,
        addedNewSidebarFolder,
        newFolderHook,
        metadata,
        getMetadataHook
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
