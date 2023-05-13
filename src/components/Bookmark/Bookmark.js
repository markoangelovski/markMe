import { sevenDaysAgo } from "../../../constants/constants";
import { Icon, IconForNew } from "../Icons/Icons";

import { client } from "../../../config";

const Bookmark = ({ bookmark }) => {
  const isBookmarkNew = new Date(bookmark.createdAt) >= sevenDaysAgo;

  return (
    <div className="flex">
      <a
        data-type="bookmark"
        data-id={bookmark._id}
        href={client + "/stats?url=" + bookmark.url + "&id=" + bookmark._id}
        className="relative flex items-center hover:bg-gray-300"
        target="_blank"
        onClick={(e) => e.stopPropagation()}
        title={bookmark.meta?.description || bookmark.meta?.url}
      >
        <Icon meta={bookmark.meta} />
        {isBookmarkNew && (
          <IconForNew classList={"w-4 absolute top-0 left-3"} />
        )}
        <span
          data-type="bookmark"
          data-id={bookmark._id}
          className="ml-2 whitespace-pre py-1 pl-1 pr-2 text-sm text-gray-900"
        >
          {bookmark.title ||
            (bookmark.meta && bookmark.meta.title) ||
            bookmark.url}
        </span>
      </a>
    </div>
  );
};

export default Bookmark;
