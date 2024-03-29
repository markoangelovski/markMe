import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import { BookmarkIcon, Favicon, Icon } from "../Icons/Icons.js";

// GitHub Pages - added only for hosting on GH Pages as base path https://nextjs.org/docs/api-reference/next.config.js/basepath#images
// const { basePath } = require("../../../config");

const NewBookmarkForm = ({ setShowModal }) => {
  const { folder, metadata } = useStoreState((state) => state);
  const { createNewBookmark } = useStoreActions((actions) => actions);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateBookmark = async (e) => {
    e.preventDefault();

    const body = { url: metadata.url, meta: metadata };
    if (folder._id) body.parentFolder = folder._id;
    if (title.length) body.title = title;
    if (description.length) body.description = description;

    if (metadata.url.length) {
      createNewBookmark(body);

      setShowModal(false);
    }
  };

  return (
    <div className="flex w-1/2 flex-col" onClick={(e) => e.stopPropagation()}>
      <div className="mb-6 flex bg-white">
        <img
          className="h-40 w-52 object-cover"
          src={metadata?.image || "/placeholder.png"}
          alt={metadata?.title}
          title={metadata?.title}
          onError={(e) => (e.target.src = /* basePath +  */ "/placeholder.png")}
        />
        <div className="flex flex-col p-3">
          <span className="mb-1">
            {/* <Favicon
              classList="h-5 w-5 inline"
              icon={metadata?.icon64 || metadata?.icon}
            /> */}
            <Icon meta={metadata} classList="h-5 w-5 inline" />
            <h2 className="ml-2 inline font-semibold">
              {metadata?.title || metadata?.url}
            </h2>
          </span>
          <p>{metadata?.description} </p>
        </div>
      </div>
      <form
        className="flex flex-col bg-white p-3"
        onSubmit={(e) => handleCreateBookmark(e)}
      >
        <div className="mb-2 flex">
          <BookmarkIcon classList="inline h-5 w-5 fill-current text-gray-700" />
          <div className="ml-2 w-full">
            <input
              onInput={(e) =>
                e.target.value.length < 250 && setTitle(e.target.value)
              }
              value={title}
              type="text"
              name="title"
              placeholder="New Bookmark title"
              className="focus:outline-none w-full text-sm text-white placeholder-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder-gray-600"
            />
          </div>
        </div>
        <input
          onInput={(e) =>
            e.target.value.length < 250 && setDescription(e.target.value)
          }
          value={description}
          type="textarea"
          name="description"
          placeholder="New Bookmark description"
          className="focus:outline-none mb-2 text-sm text-white placeholder-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder-gray-600"
        />
        <input className="cursor-pointer" type="submit" value="Create" />
      </form>
    </div>
  );
};

export default NewBookmarkForm;
