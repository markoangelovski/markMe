import { Icon } from "../Icons/Icons";

const Bookmark = ({ bookmark }) => {
  return (
    <a
      data-type="bookmark"
      data-id={bookmark._id}
      href={bookmark.url}
      className="flex-shrink-0 flex items-center"
      target="_blank"
      onClick={e => e.stopPropagation()}
      title={bookmark.meta?.description || bookmark.meta?.url}
    >
      <Icon meta={bookmark.meta} />
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
