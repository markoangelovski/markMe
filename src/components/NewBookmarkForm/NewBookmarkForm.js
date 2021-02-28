import { useState } from "react";
import { useRouter } from "next/router";

import { useGlobalState } from "../../hooks/GlobalContext.js";

import { BookmarkIcon, Favicon } from "../Icons/Icons.js";

const NewBookmarkForm = ({ setShowModal }) => {
  const router = useRouter();
  const { folderId } = router.query;

  const { newBookmarkHook, metadata } = useGlobalState();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateBookmark = async e => {
    e.preventDefault();

    const body = { url: metadata.url, meta: metadata.meta };
    if (folderId) body.parentFolder = folderId;
    if (title.length) body.title = title;
    if (description.length) body.description = description;

    if (metadata.url.length) {
      newBookmarkHook(body);

      setShowModal(false);
    }
  };

  return (
    <div className="flex flex-col w-1/2">
      <div className="flex mb-6 bg-white">
        <img
          className="h-40 w-52 object-cover"
          src={metadata.meta?.image || "/placeholder.png"}
          alt={metadata.meta?.title}
          title={metadata.meta?.title}
          onError={e => (e.target.src = "/placeholder.png")}
        />
        <div className="flex flex-col p-3">
          <span className="mb-1">
            <Favicon classList="h-5 w-5 inline" icon={metadata.meta?.icon} />
            <h2 className="ml-2 font-semibold inline">
              {metadata.meta?.title || metadata.url}
            </h2>
          </span>
          <p>{metadata.meta?.description} </p>
        </div>
      </div>
      <form
        className="flex flex-col p-3 bg-white"
        onClick={e => e.stopPropagation()}
        onSubmit={e => handleCreateBookmark(e)}
      >
        <div className="mb-2 flex">
          <BookmarkIcon classList="inline h-5 w-5 fill-current text-gray-700" />
          <div className="ml-2 w-full">
            <input
              onInput={e =>
                e.target.value.length < 50 && setTitle(e.target.value)
              }
              value={title}
              type="text"
              name="title"
              placeholder="New Bookmark title"
              className="w-full text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
            />
          </div>
        </div>
        <input
          onInput={e =>
            e.target.value.length < 250 && setDescription(e.target.value)
          }
          value={description}
          type="textarea"
          name="description"
          placeholder="New Bookmark description"
          className="mb-2 text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
        />
        <input className="cursor-pointer" type="submit" value="Create" />
      </form>
    </div>
  );
};

export default NewBookmarkForm;
