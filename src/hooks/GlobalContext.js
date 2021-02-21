import { createContext, useContext } from "react";

import {
  useGetSidebarContent,
  useGetFolderContents,
  useNewBookmark,
  useNewSubFolder
} from "./useDataFetching";

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export const GlobalContextProvider = ({ children }) => {
  const { folders, bookmarks } = useGetSidebarContent();
  const { folder } = useGetFolderContents();
  const { addedNewBookmark, newBookmarkHook } = useNewBookmark();
  const {
    addedNewSubFolder,
    addedNewSidebarFolder,
    newFolderHook
  } = useNewSubFolder();

  return (
    <GlobalStateContext.Provider
      value={{
        folders,
        bookmarks,
        folder,
        addedNewBookmark,
        newBookmarkHook,
        addedNewSubFolder,
        addedNewSidebarFolder,
        newFolderHook
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
