import Link from "next/link";
import { useStoreState } from "easy-peasy";

import Folder from "../Folder/Folder.js";
import Bookmark from "../Bookmark/Bookmark.js";
import Footer from "../Footer/Footer.js";

const HomeContent = () => {
  const { sidebar } = useStoreState(state => state);
  return (
    <>
      <div
        className="flex-1 p-3 overflow-x-auto flex flex-col flex-wrap h-full"
        // className="flex-1 p-3 overflow-x-auto flex flex-wrap h-full"
        // onDragOver={e => e.preventDefault()} // Required for drag and drop to function
        // onDrop={e => handleDrop(e)}
      >
        {sidebar.folders?.map(folder => (
          <Folder key={folder._id} folder={folder} />
        ))}
        {sidebar.bookmarks?.map(bookmark => (
          <Bookmark key={bookmark._id} bookmark={bookmark} />
        ))}
        {/* 
        <section className="container px-6 py-4 mx-auto">
          <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {sidebar.folders?.map(folder => (
              // Folder card
              <Link key={folder._id} href={`/#${folder.path}`}>
                <a>
                  <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                    <div className="p-3 mr-4 bg-gray-500 text-white rounded-full">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-900">
                        {folder.title}
                      </p>
                      <p className="text-sm font-normal text-gray-800">
                        {folder.description}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
      */}
      </div>
      <Footer
        folderCount={sidebar.folders?.length}
        bookmarkCount={sidebar.bookmarks?.length}
      />
    </>
  );
};

export default HomeContent;
