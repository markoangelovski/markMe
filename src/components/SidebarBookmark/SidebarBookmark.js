import { sevenDaysAgo } from "../../../constants/constants";
import { Icon, IconForNew } from "../Icons/Icons";

const SidebarBookmark = ({ bookmark }) => {
  const isBookmarkNew = new Date(bookmark.createdAt) > sevenDaysAgo;

  const meta = bookmark.meta;

  return (
    <a
      data-type="bookmark"
      data-id={bookmark._id}
      href={bookmark.url}
      className="relative -mx-3 flex items-center px-3  py-2 text-sm font-medium hover:bg-gray-200"
      target="_blank"
    >
      <Icon meta={meta} />
      {isBookmarkNew && <IconForNew classList={"w-4 absolute top-0 left-5"} />}
      <span
        data-type="bookmark"
        data-id={bookmark._id}
        className="ml-2 text-gray-900"
        title={bookmark.meta?.description || bookmark.meta?.url}
      >
        {bookmark.title || (meta && meta.title) || bookmark.url}
      </span>
    </a>
  );
};

export default SidebarBookmark;
