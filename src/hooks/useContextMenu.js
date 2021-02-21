import { useEffect, useState } from "react";

const useContextMenu = () => {
  const [showCtxMenu, setShowCtxMenu] = useState(false);
  const [coords, setCoords] = useState([0, 0]);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const onContextMenu = ctx => {
      ctx.preventDefault();
      // Display the Right Click menu
      setShowCtxMenu(true);
      // Returns the mouse coordinates for positioning the Right Click menu
      setCoords([ctx.clientX, ctx.clientY]);
      // Returns _id, type and inner text of the item that was clicked on
      setId(ctx.target.dataset.id);
      setType(ctx.target.dataset.type);
      setText(ctx.target.innerText);
    };

    const onClick = click => {
      click.preventDefault();
      setShowCtxMenu(false);
    };

    window.addEventListener("contextmenu", onContextMenu);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("contextmenu", onContextMenu);
      window.removeEventListener("click", onClick);
      setShowCtxMenu(false);
      setCoords([0, 0]);
      setId("");
      setType("");
    };
  }, []);

  return { showCtxMenu, coords, id, type, text };
};

export default useContextMenu;
