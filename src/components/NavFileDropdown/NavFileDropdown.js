import { useState } from "react";

import Modal from "../Modal/Modal";
import NewFolderForm from "../NewFolderForm/NewFolderForm";

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
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <NewFolderForm setShowModal={setShowModal} />
        </Modal>
      )}
      <div
        className={`absolute w-48 py-2 bg-white rounded-sm shadow-xl ${
          visible ? "block" : "hidden"
        } `}
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-400"
          onClick={e => {
            e.preventDefault();
            setVisible(false);
            setShowModal(true);
          }}
        >
          New Folder
        </a>
        {/* <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-400"
        >
          New Bookmark
        </a> */}
      </div>
    </span>
  );
};

export default NavFileDropdown;
