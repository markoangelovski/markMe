import { BookmarkIcon, FolderIcon } from "../Icons/Icons";

const HomeStats = ({ type, title, elementTitle, totalItems }) => {
  return (
    <div title={elementTitle}>
      <h2 className="mb-2">{title}</h2>

      <div className="flex">
        {type === "folder" && (
          <FolderIcon showSubFolders={true} classList={"w-10 flex-none mr-2"} />
        )}
        {type === "bookmark" && <BookmarkIcon classList={"w-10 flex-none"} />}

        <span className="w-full text-center text-3xl">{totalItems}</span>
      </div>
    </div>
  );
};

export default HomeStats;
