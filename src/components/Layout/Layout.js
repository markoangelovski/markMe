import Router from "next/router";
import { useEffect, useState } from "react";
import { auth } from "../../drivers/backend.driver.js";

import Header from "../Header/Header.js";
import ContextMenu from "../ContextMenu/ContextMenu.js";
import Navbar from "../Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";

const Layout = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  // // const [click, setClick] = useState(null); // TODO: Left click event - makni ako ne bude trebao.
  // const [ctx, setCtx] = useState(null);
  // const [ctxMenuOpen, setCtxMenuOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await auth({});

        if (res.status >= 400) {
          localStorage.removeItem("markmeUserDetails");
          Router.replace("/login");
        } else {
          setUserAuthenticated(true);
        }
      } catch (error) {
        console.warn("Auth Error: ", error);
        Router.replace("/login");
      }
    })();
  }, []);

  if (!userAuthenticated) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div
        className="h-screen flex flex-col"
        // onContextMenu={e => {
        //   e.preventDefault();
        //   // Handles passing right click event details to ContextMenu (Right click menu)
        //   setCtxMenuOpen(true);
        //   setCtx(e);
        // }}
        // onClick={e => {
        //   e.preventDefault;
        //   // Handles passing left click event details to ContextMenu (Right click menu)
        //   setCtxMenuOpen(false);
        //   // setClick(e); // TODO: Left click event - makni ako ne bude trebao.
        // }}
      >
        <ContextMenu /* click={click} */ /* ctxMenuOpen={ctxMenuOpen}  */
        /*  ctx={ctx}  */
        />
        <Navbar />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <main className="flex-1 flex flex-col bg-gray-200 h-full">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
