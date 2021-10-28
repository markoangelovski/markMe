import { Icon } from "../Icons/Icons";

const Bookmark = ({ bookmark }) => {
  return (
    <div className="flex">
      <a
        data-type="bookmark"
        data-id={bookmark._id}
        href={bookmark.url}
        className="flex items-center hover:bg-gray-300"
        target="_blank"
        onClick={e => e.stopPropagation()}
        title={bookmark.meta?.description || bookmark.meta?.url}
      >
        <Icon meta={bookmark.meta} />
        <span
          data-type="bookmark"
          data-id={bookmark._id}
          className="ml-2 py-1 pl-1 pr-2 text-sm whitespace-pre text-gray-900"
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
