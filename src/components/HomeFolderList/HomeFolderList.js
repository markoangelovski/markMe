import { fmtTime } from "../../helpers/helpers";
import Bookmark from "../Bookmark/Bookmark";
import Folder from "../Folder/Folder";

const HomeFolderList = ({ title, headings, folders, bookmarks }) => {
  const cellStyle = "text-sm font-normal text-gray-900";

  return (
    <>
      <div className="flex flex-col p-3 w-3/6 overflow-hidden">
        <div className="text-center border-b border-gray-800">
          <h2>{title}</h2>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full px-3">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    {headings.map((heading, i) => (
                      <th key={i} scope="col" className="px-6 py-2">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {folders &&
                    folders.map((folder, i) => (
                      <tr key={i} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6">
                          <Folder folder={folder} />
                        </td>
                        <td className="whitespace-nowrap px-6">
                          {folder.path}
                        </td>
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
                      <tr key={i} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6">
                          <Bookmark bookmark={bookmark} />
                        </td>
                        <td className="whitespace-nowrap px-6">
                          {bookmark.path}
                        </td>
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
      {/* <div classNameName="p-3 w-2/4">
        <div classNameName="text-center border-b border-gray-800">
          <h2>{title}</h2>
        </div>
        <table classNameName="table-fixed w-full">
          <thead>
            <tr>
              {headings.map((heading, i) => (
                <th key={i} classNameName={cellStyle}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {folders &&
              folders.map((folder, i) => (
                <tr>
                  <td classNameName="truncate">
                    <Folder folder={folder} />{" "}
                  </td>
                  <td classNameName={cellStyle}>{folder.path}</td>
                  <td classNameName={cellStyle + " text-center"}>
                    {folder.folderCount}
                  </td>
                  <td classNameName={cellStyle + " text-center"}>
                    {folder.bookmarkCount}
                  </td>
                  <td classNameName={cellStyle}>{fmtTime(folder.createdAt)}</td>
                  <td classNameName={cellStyle}>{fmtTime(folder.updatedAt)}</td>
                </tr>
              ))}

            {bookmarks &&
              bookmarks.map((bookmark, i) => (
                <tr>
                  <td classNameName="truncate">
                    <Bookmark bookmark={bookmark} />{" "}
                  </td>
                  <td classNameName={cellStyle}>{bookmark.path}</td>
                  <td classNameName={cellStyle}>{fmtTime(bookmark.createdAt)}</td>
                  <td classNameName={cellStyle}>{fmtTime(bookmark.updatedAt)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
};

export default HomeFolderList;
