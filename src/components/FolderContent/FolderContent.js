import { useRouter } from "next/router";

import { newBookmark } from "../../drivers/backend.driver.js";

import Folder from "../Folder/Folder";
import Bookmark from "../Bookmark/Bookmark";
import Footer from "../Footer/Footer";

const FolderContent = ({ folder, setReFetch }) => {
  const router = useRouter();
  const { folderId } = router.query;

  const handleDrop = async e => {
    e.preventDefault();

    // Creates a new Bookmark for a drag and drop URL/link from other tab
    const url = e.dataTransfer.getData("text/uri-list");

    try {
      await newBookmark({
        body: {
          url,
          parentFolder: folderId
        }
      });

      // Wait for a second for the bookmark to be stored in DB before refetching
      setTimeout(() => {
        setReFetch(status => !status);
      }, 1000);
    } catch (error) {
      console.warn("Error creating a new bookmark: ", error);
    }
  };

  const handleDragOver = e => {
    // Required for drag and drop to function
    e.preventDefault();
  };

  return (
    <>
      <div
        className="flex-1 p-3 overflow-x-auto flex flex-col flex-wrap h-full"
        onDragOver={e => handleDragOver(e)}
        onDrop={e => handleDrop(e)}
      >
        {folder
          ? folder.folders.map((folder, i) => (
              <Folder key={i} folder={folder} />
            ))
          : null}
        {folder
          ? folder.bookmarks.map((bookmark, i) => (
              <Bookmark key={i} bookmark={bookmark} />
            ))
          : null}
      </div>
      <Footer
        folderCount={folder ? folder.folderCount : 0}
        bookmarkCount={folder ? folder.bookmarkCount : 0}
      />
    </>
  );
};

export default FolderContent;
