import { BookmarkIcon, Favicon } from "../Icons/Icons";

const Bookmark = ({ bookmark }) => {
  return (
    <a
      data-type="bookmark"
      data-id={bookmark._id}
      href={bookmark.url}
      className="flex-shrink-0 flex items-center"
      target="_blank"
      onClick={e => e.stopPropagation()}
    >
      {bookmark.meta && bookmark.meta.icon ? (
        <Favicon classList="h-5 w-5" icon={bookmark.meta.icon} />
      ) : (
        <BookmarkIcon classList="h-5 w-5 fill-current text-gray-700" />
      )}
      <span
        data-type="bookmark"
        data-id={bookmark._id}
        className="ml-2 py-1 pl-1 pr-2 text-sm whitespace-pre text-gray-900 hover:bg-gray-300"
      >
        {bookmark.title ||
          (bookmark.meta && bookmark.meta.title) ||
          bookmark.url}
      </span>
    </a>
  );
};

export default Bookmark;
