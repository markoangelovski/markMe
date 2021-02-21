import { useEffect, useState } from "react";

const useBradcrumbClick = () => {
  const [id, setId] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const onClick = ctx => {
      ctx.preventDefault();

      setId(ctx.target.dataset.id);
      setType(ctx.target.dataset.type);
    };

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
      setId("");
      setType("");
    };
  }, []);

  return { id, type };
};

export default useBradcrumbClick;
