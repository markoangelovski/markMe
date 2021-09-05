import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import NewFolder from "./NewFolder.js";
import Delete from "./Delete.js";

import Modal from "../Modal/Modal.js";
import NewFolderForm from "../NewFolderForm/NewFolderForm.js";
import NewBookmarkForm from "../NewBookmarkForm/NewBookmarkForm.js";

import useContextMenu from "../../hooks/useContextMenu.js";

const ContextMenu = () => {
  const [showNewFolderModal, setShowNewFolderModal] = useState(false);

  const { showCtxMenu, coords, id, type, text } = useContextMenu();

  const { showNewBookmarkModal } = useStoreState(state => state);
  const { setShowNewBookmarkModal } = useStoreActions(actions => actions);

  return (
    <>
      {/* Context/Right click menu */}
      <div
        className={`absolute w-48 py-2 bg-white rounded-sm shadow-xl ${
          showCtxMenu ? "block" : "hidden"
        } `}
        style={{
          left: coords[0] + "px",
          top: coords[1] + "px"
        }}
      >
        {!id && <NewFolder setShowModal={setShowNewFolderModal} />}
        {id && <Delete id={id} type={type} text={text} />}
      </div>

      {/* New folder modal */}
      {showNewFolderModal && (
        <Modal setShowModal={setShowNewFolderModal}>
          <NewFolderForm setShowModal={setShowNewFolderModal} />
        </Modal>
      )}

      {/* New bookmark modal */}
      {showNewBookmarkModal && (
        <Modal setShowModal={setShowNewBookmarkModal}>
          <NewBookmarkForm setShowModal={setShowNewBookmarkModal} />
        </Modal>
      )}
    </>
  );
};

export default ContextMenu;
