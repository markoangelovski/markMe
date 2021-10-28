import Router from "next/router";
import { useEffect, useState } from "react";
import { StoreProvider } from "easy-peasy";

import { auth } from "../../drivers/backend.driver.js";

import useLocalStorage from "../../hooks/useLocalStorage.js";

import store from "../../state/store.js";

import LoadingScreen from "../LoadingScreen/LoadingScreen.js";
import Header from "../Header/Header.js";
import ContextMenu from "../ContextMenu/ContextMenu.js";
import Navbar from "../Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.js";

import Alerts from "../Alerts/Alerts.js";

const Layout = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const { del } = useLocalStorage();

  useEffect(() => {
    const path = Router.router.asPath;
    // path.length > 1 in order to avoid sending callback="/" when hitting the home route while unauthenticated
    const redirectPath = path.length > 1 ? "/login?callback=" + path : "/login";
    (async () => {
      try {
        const res = await auth({});

        if (res.status >= 400) {
          del("markmeUserDetails");
          Router.replace(redirectPath);
        } else {
          setUserAuthenticated(true);
        }
      } catch (error) {
        console.warn("Auth Error: ", error);
        Router.replace(redirectPath);
      }
    })();
  }, []);

  if (!userAuthenticated) return <LoadingScreen />;

  return (
    <StoreProvider store={store}>
      <Header />
      <div className="h-screen flex flex-col">
        <ContextMenu />
        <Navbar />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <main className="flex-1 flex flex-col bg-gray-200 h-full overflow-hidden">
            <Breadcrumbs />
            {children}
          </main>
        </div>
      </div>
      <Alerts />
    </StoreProvider>
  );
};

export default Layout;
