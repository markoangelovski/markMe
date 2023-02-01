import { useState } from "react";

import Modal from "../Modal/Modal.js";
import NewFolderForm from "../NewFolderForm/NewFolderForm.js";
import { FolderIcon } from "../Icons/Icons.js";

const NavFileDropdown = () => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <span>
      <a
        href="#"
        className="inline-block px-3 py-2 leading-none rounded-sm text-sm font-medium text-white hover:bg-gray-600"
        onClick={e => {
          e.preventDefault();
          setVisible(vis => !vis);
        }}
      >
        File
      </a>
      {visible && (
        <button
          className="absolute inset-0 h-full w-full cursor-default outline-none"
          onClick={() => setVisible(false)}
        ></button>
      )}
      <div
        className={`absolute w-48 py-2 bg-white rounded-sm shadow-xl ${
          visible ? "block" : "hidden"
        } `}
      >
        <a
          href="#"
          className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white"
          onClick={e => {
            e.preventDefault();
            setVisible(false);
            setShowModal(true);
          }}
        >
          <FolderIcon
            classList="items-centere h-5 w-5 fill-current text-gray-800 hover:text-white"
            showSubFolders={false} // showSubFolders = false in order to display an empty folder icon
          />
          <span className="flex-1 px-4">New Folder</span>
        </a>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <NewFolderForm setShowModal={setShowModal} />
        </Modal>
      )}
    </span>
  );
};

export default NavFileDropdown;
