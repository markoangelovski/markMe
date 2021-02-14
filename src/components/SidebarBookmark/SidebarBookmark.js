const SidebarBookmark = ({ bookmark }) => {
  return (
    <a
      className="-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200"
      href={bookmark.url}
      target="_blank"
    >
      <span className="inline-flex">
        <svg
          className="inline h-5 w-5 fill-current text-gray-700"
          viewBox="0 0 60 60"
        >
          <path d="M52.934 6.136c0-3.324-2.684-6.053-6-6.126V0h-36.91a6.096 6.096 0 00-6.09 6.09v50.778l19-12.666 19 12.666V25h11V6.136zm-13 46.996l-17-11.334-17 11.334V6.09A4.095 4.095 0 0110.024 2H42.04a6.993 6.993 0 00-1.965 3.611l-.001.003A6.86 6.86 0 0039.934 7V53.132zm11-30.132h-9V7c0-.34.035-.671.1-.992a5.034 5.034 0 013.728-3.855c.036-.009.068-.025.104-.032.243-.054.498-.073.753-.089.083-.005.162-.024.246-.025 2.246.037 4.069 1.881 4.069 4.129V23z" />
        </svg>
        <span className="ml-2 text-gray-900">
          {bookmark.title ||
            (bookmark.meta && bookmark.meta.title) ||
            bookmark.url}
        </span>
      </span>
    </a>
  );
};

export default SidebarBookmark;
