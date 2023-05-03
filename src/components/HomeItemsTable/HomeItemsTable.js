import Link from "next/link";

import { fmtTime } from "../../helpers/helpers";
import Bookmark from "../Bookmark/Bookmark";
import Folder from "../Folder/Folder";

const HomeItemsTable = ({ title, headings, folders, bookmarks }) => {
  const isPopularList = headings.includes("Visits");
  return (
    <>
      <div className="flex w-3/6 flex-col overflow-hidden p-3">
        <div className="border-b border-gray-800 text-center">
          <h2>{title}</h2>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full px-3">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm ">
                <thead className="dark:border-neutral-500 border-b">
                  <tr>
                    {headings.map((heading, i) => (
                      <th
                        key={i}
                        scope="col"
                        className="whitespace-nowrap px-6 py-2"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {folders &&
                    folders.map((folder, i) => (
                      <tr key={i} className="dark:border-neutral-500 border-b">
                        <td className="whitespace-nowrap px-6">
                          <Folder folder={folder} />
                        </td>
                        <td className="whitespace-nowrap px-6">
                          <Link href={`/#${folder.path}`}>{folder.path}</Link>
                        </td>
                        {isPopularList && (
                          <td className="whitespace-nowrap px-6">
                            {folder.hitCount}
                          </td>
                        )}
                        <td className="whitespace-nowrap px-6">
                          {folder.folderCount}
                        </td>
                        <td className="whitespace-nowrap px-6">
                          {folder.bookmarkCount}
                        </td>
                        <td className="whitespace-nowrap px-6">
                          {fmtTime(folder.createdAt)}
                        </td>
                        <td className="whitespace-nowrap px-6">
                          {fmtTime(folder.updatedAt)}
                        </td>
                      </tr>
                    ))}

                  {bookmarks &&
                    bookmarks.map((bookmark, i) => (
                      <tr key={i} className="dark:border-neutral-500 border-b">
                        <td className="whitespace-nowrap px-6">
                          <Bookmark bookmark={bookmark} />
                        </td>
                        <td className="whitespace-nowrap px-6">
                          <Link href={`/#${bookmark.parentFolderPath}`}>
                            <a>{bookmark.parentFolderPath}</a>
                          </Link>
                        </td>
                        {isPopularList && (
                          <td className="whitespace-nowrap px-6">
                            {bookmark.hitCount}
                          </td>
                        )}
                        <td className="whitespace-nowrap px-6">
                          {fmtTime(bookmark.createdAt)}
                        </td>
                        <td className="whitespace-nowrap px-6">
                          {fmtTime(bookmark.updatedAt)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeItemsTable;
