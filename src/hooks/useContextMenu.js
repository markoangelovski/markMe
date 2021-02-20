import { useEffect, useState } from "react";

const useContextMenu = () => {
  const [showCtxMenu, setShowCtxMenu] = useState(false);
  const [coords, setCoords] = useState([0, 0]);
  const [id, setId] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const onContextMenu = ctx => {
      ctx.preventDefault();
      setShowCtxMenu(true);
      setCoords([ctx.clientX, ctx.clientY]);
      setId(ctx.target.dataset.id);
      setType(ctx.target.dataset.type);
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

  return { showCtxMenu, coords, id, type };
};

export default useContextMenu;
