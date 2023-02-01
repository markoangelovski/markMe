import { useRouter } from "next/router";
import { useState } from "react";
import { useStoreActions } from "easy-peasy";

const NewFolderForm = ({ setShowModal }) => {
  const router = useRouter();
  const folderPath = router.asPath.split("#")[1];

  const { createNewFolder } = useStoreActions(actions => actions);

  const [title, setTitle] = useState("");

  const handleCreateFolder = async e => {
    e.preventDefault();

    const body = { title };
    if (folderPath.length > 1) body.parentFolderPath = folderPath;

    if (title.length) {
      createNewFolder({ body });

      setShowModal(false);
    }
  };

  return (
    <form
      className="relative flex w-64"
      onClick={e => e.stopPropagation()}
      onSubmit={e => handleCreateFolder(e)}
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="h-5 w-5 fill-current text-gray-700" viewBox="0 0 60 60">
          <path d="M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z" />
          <path d="M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z" />
          <path d="M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z" />
        </svg>
      </span>
      <input
        onInput={e => e.target.value.length && setTitle(e.target.value)}
        type="text"
        name="search"
        placeholder="New Folder"
        autoFocus
        className="block pl-9 pr-4 py-2 w-full bg-gray-900 rounded-sm text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
      />
      <input
        className="p-2 rounded-r-sm text-sm text-white placeholder-gray-400 bg-gray-900 focus:outline-none cursor-pointer"
        type="submit"
        value="Create"
      />
    </form>
  );
};

export default NewFolderForm;
