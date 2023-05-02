import { createStore, action, thunk } from "easy-peasy";

import {
  getSidebarContent,
  getFolderContents,
  newFolder,
  newBookmark,
  getBookmarkMetadata
} from "../drivers/backend.driver.js";

export default createStore({
  // Folder state
  folder: {},
  sidebar: {},
  // Bookmark state
  metadata: {},
  showNewBookmarkModal: false,
  // Error state
  error: {},
  // Folder actions
  setFolder: action((state, folder) => {
    state.folder = folder;
  }),
  setFolders: action((state, folders) => {
    state.folders = folders.concat(folders);
  }),
  setSidebar: action((state, sidebar) => {
    state.sidebar = {
      totalFolders: sidebar.totalFolders,
      totalBookmarks: sidebar.totalBookmarks,
      newFolders: sidebar.newFolders,
      newBookmarks: sidebar.newBookmarks,
      recentFolders: sidebar.recentFolders,
      recentBookmarks: sidebar.recentBookmarks,
      rootFolders: sidebar.rootFolders,
      rootBookmarks: sidebar.rootBookmarks
    };
  }),
  fetchSidebarContent: thunk(async (actions) => {
    const res = await getSidebarContent({});
    res.status === 200 && actions.setSidebar(res);
    res.status > 201 && actions.setError(res);
  }),
  fetchActiveFolder: thunk(async (actions, path) => {
    const res = path && (await getFolderContents({ query: { path } }));
    res?.status === 200 && actions.setFolder(res.folder);
    res?.status > 201 && actions.setError(res);
  }),
  createNewFolder: thunk(async (actions, { body }, { getStoreState }) => {
    const res = await newFolder({ body });

    const { sidebar, folder } = getStoreState();

    // Creating new folder is successfull
    if (res.status === 201) {
      // If created folder is Root Folder, add folder to Sidebar folders
      !res.folder.parentFolder &&
        actions.setSidebar({
          ...sidebar,
          folders: [...sidebar.folders, res.folder]
        });

      // If created folder is Child Folder, add folder to the currently Active Folder
      res.folder.parentFolder &&
        actions.setFolder({
          ...folder,
          folders: [...folder.folders, res.folder]
        });
    }

    // Creating new folder is not successfull, display error message
    res.status > 201 && actions.setError(res);
  }),
  // Bookmark actions
  setMetadata: action((state, metadata) => {
    state.metadata = metadata;
  }),
  setShowNewBookmarkModal: action((state, payload) => {
    // Resets the metadata when closing the bookmark modal, to avoid displaying the metadata from previous bookmark
    if (!payload) state.metadata = {};
    state.showNewBookmarkModal = payload;
  }),
  fetchBookmarkMetadata: thunk(async (actions, url) => {
    const res = await getBookmarkMetadata({ query: { url } });
    res.status === 200 && actions.setMetadata(res.meta);
    res.status > 201 && actions.setError(res);
  }),
  createNewBookmark: thunk(async (actions, body, { getStoreState }) => {
    const res = await newBookmark({ body });

    const { sidebar, folder } = getStoreState();

    // Creating new folder is successfull
    if (res.status === 201) {
      // If created bookmark is in Root, add bookmark to Sidebar bookmarks
      !res.bookmark.parentFolder &&
        actions.setSidebar({
          ...sidebar,
          bookmarks: [...sidebar.bookmarks, res.bookmark]
        });

      // If created bookmark is Child Bookmark, add bookmark to the currently Active Folder's bookmarks
      res.bookmark.parentFolder &&
        actions.setFolder({
          ...folder,
          bookmarks: [...folder.bookmarks, res.bookmark]
        });
    }

    // Creating new folder is not successfull, display error message
    res.status > 201 && actions.setError(res);
  }),
  // Error actions
  setError: action((state, error) => {
    state.error = error;
  })
});
