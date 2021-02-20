import { NewFolder } from "./ContextMenu.items.js";

import useContextMenu from "../../hooks/useContextMenu.js";

const ContextMenu = (/* { ctx, ctxMenuOpen } */) => {
  const { showCtxMenu, coords, id, type } = useContextMenu();

  return (
    <div
      className={`absolute w-48 py-2 bg-white rounded-sm shadow-xl ${
        showCtxMenu ? "block" : "hidden"
      } `}
      style={{
        left: coords[0] + "px",
        top: coords[1] + "px"
      }}
    >
      <NewFolder id={id} type={type} />
    </div>
  );
};

export default ContextMenu;
