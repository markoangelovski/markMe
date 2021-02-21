import Router from "next/router";
import { useEffect, useState } from "react";

import { auth } from "../../drivers/backend.driver.js";

import useLocalStorage from "../../hooks/useLocalStorage.js";
import { GlobalContextProvider } from "../../hooks/GlobalContext.js";

import Header from "../Header/Header.js";
import ContextMenu from "../ContextMenu/ContextMenu.js";
import Navbar from "../Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.js";

const Layout = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const { del } = useLocalStorage();

  useEffect(() => {
    (async () => {
      try {
        const res = await auth({});

        if (res.status >= 400) {
          del("markmeUserDetails");
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
    <GlobalContextProvider>
      <Header />
      <div className="h-screen flex flex-col">
        <ContextMenu />
        <Navbar />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <main className="flex-1 flex flex-col bg-gray-200 h-full">
            <Breadcrumbs />
            {children}
          </main>
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default Layout;
