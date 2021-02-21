import { useState } from "react";

import NewFolder from "./NewFolder.js";
import Delete from "./Delete.js";

import Modal from "../Modal/Modal";
import NewFolderForm from "../NewFolderForm/NewFolderForm";

import useContextMenu from "../../hooks/useContextMenu.js";

const ContextMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const { showCtxMenu, coords, id, type, text } = useContextMenu();

  return (
    <>
      <div
        className={`absolute w-48 py-2 bg-white rounded-sm shadow-xl ${
          showCtxMenu ? "block" : "hidden"
        } `}
        style={{
          left: coords[0] + "px",
          top: coords[1] + "px"
        }}
      >
        {!id && <NewFolder setShowModal={setShowModal} />}
        {id && <Delete id={id} type={type} text={text} />}
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <NewFolderForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default ContextMenu;
