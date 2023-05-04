import Link from "next/link";
import { useState } from "react";

import { client } from "../../../config";

import { Icon } from "../Icons/Icons";

import { getSearchSuggestions } from "../../drivers/backend.driver";
import { FolderIcon } from "../Icons/Icons";

const Search = () => {
  const [suggestedFolders, setSuggestedFolders] = useState([]);
  const [suggestedBookmarks, setSuggestedBookmarks] = useState([]);

  const [visible, setVisible] = useState(false);

  const clear = () => {
    setVisible(false);
    setSuggestedFolders([]);
    setSuggestedBookmarks([]);
  };

  const handleAutoComplete = async (e) => {
    const term = e.target.value;

    const result =
      term.length > 2 &&
      (await getSearchSuggestions({
        query: { term }
      }));
    result && setVisible(true);
    result && setSuggestedFolders(result.folders);
    result && setSuggestedBookmarks(result.bookmarks);
  };

  return (
    <div className="relative w-1/2">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          className="h-5 w-5 fill-current text-gray-500"
          viewBox="0 0 53.627 53.627"
        >
          <path d="M53.627 49.385L37.795 33.553C40.423 30.046 42 25.709 42 21 42 9.42 32.58 0 21 0S0 9.42 0 21s9.42 21 21 21c4.709 0 9.046-1.577 12.553-4.205l15.832 15.832 4.242-4.242zM2 21C2 10.523 10.523 2 21 2s19 8.523 19 19-8.523 19-19 19S2 31.477 2 21zm33.567 15.093c.178-.172.353-.347.525-.525.146-.151.304-.29.445-.445l14.262 14.262-1.415 1.415-14.261-14.263c.155-.141.293-.299.444-.444z" />
        </svg>
      </span>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onInput={handleAutoComplete}
          type="text"
          placeholder="Search"
          className="focus:outline-none block w-full rounded-sm bg-gray-900 py-2 pl-9 pr-4 text-sm text-white placeholder-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder-gray-600"
        />
      </form>
      <button
        className={`outline-none fixed inset-0 h-full w-full cursor-default   ${
          visible ? "block" : "hidden"
        }`}
        onClick={clear}
      ></button>
      <ul
        className={`absolute z-10 mt-2.5 block w-full rounded-sm bg-white py-2 shadow-xl ${
          visible ? "block" : "hidden"
        }`}
      >
        {suggestedFolders.map((suggestedFolder, i) => (
          <li key={i}>
            <Link href={`/#${suggestedFolder.path}`}>
              <a
                className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white"
                onClick={clear}
                title={
                  suggestedFolder.title + " on path: " + suggestedFolder.path
                }
              >
                <FolderIcon
                  classList="items-centere h-5 w-5 fill-current text-gray-800 hover:text-white"
                  showSubFolders={false} // showSubFolders = false in order to display an empty folder icon
                />
                <span className="px-4">{suggestedFolder.title}</span>
              </a>
            </Link>
          </li>
        ))}
        <hr />
        {suggestedBookmarks.map((suggestedBookmark, i) => (
          <li key={i}>
            <a
              className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white"
              href={
                client +
                "/stats?url=" +
                suggestedBookmark.url +
                "&id=" +
                suggestedBookmark._id
              }
              target="_blank"
              title={
                suggestedBookmark?.parentFolderPath &&
                suggestedBookmark.meta?.title +
                  " on path: " +
                  suggestedBookmark.parentFolderPath
              }
              onClick={(e) => {
                e.stopPropagation();
                clear();
              }}
            >
              <Icon meta={suggestedBookmark.meta} />
              <span className="px-4">
                {suggestedBookmark.title || suggestedBookmark.meta?.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
