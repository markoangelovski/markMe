import { Icon } from "../Icons/Icons";

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
      <Icon meta={meta} />
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
