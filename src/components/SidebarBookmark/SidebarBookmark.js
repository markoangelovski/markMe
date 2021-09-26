import { BookmarkIcon, Favicon } from "../Icons/Icons";

const SidebarBookmark = ({ bookmark }) => {
  const meta = bookmark.meta;

  return (
    <a
      data-type="bookmark"
      data-id={bookmark._id}
      href={bookmark.url}
      className="-mx-3 px-3 py-2 flex items-center  text-sm font-medium hover:bg-gray-200"
      target="_blank"
    >
      {(meta && meta.icon64) || (meta && meta.icon) ? (
        <Favicon
          classList="h-5 w-5 flex-shrink-0"
          icon={meta.icon64 || meta.icon}
        />
      ) : (
        <BookmarkIcon classList="h-5 w-5 flex-shrink-0 fill-current text-gray-700" />
      )}
      <span
        data-type="bookmark"
        data-id={bookmark._id}
        className="ml-2 text-gray-900"
      >
        {bookmark.title || (meta && meta.title) || bookmark.url}
      </span>
    </a>
  );
};

export default SidebarBookmark;
