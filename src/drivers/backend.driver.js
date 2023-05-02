import NProgress from "nprogress";

import * as backend from "../../config";

const makeDriver =
  (method, endpoint, json) =>
  async ({ param, auth, body, query }) => {
    // Set main backend API endpoint
    let url = backend.api + endpoint;

    // Add req.param if exits
    if (param) url = url + "/" + param;

    // Add req.query if exits
    if (query) url = url + "?" + new URLSearchParams(query);

    const headers = {};
    // Set content type to json for JSON payloads
    if (json) headers["Content-Type"] = "application/json";

    // Set Authorization header for login
    if (auth)
      headers["Authorization"] =
        "Basic " + btoa(`${auth.username}:${auth.password}`);

    const options = {
      method,
      headers,
      credentials: "include",
    };

    // Set request body
    if (body) options.body = JSON.stringify(body);

    let status;

    NProgress.start();
    const res = await fetch(url, options).then((res) => {
      status = res.status;
      return res.json();
    });
    NProgress.done();

    return { status, ...res };
  };

// User auth drivers
export const auth = makeDriver("POST", "/user/auth", false);
export const login = makeDriver("POST", "/user/login", false);
export const logout = makeDriver("POST", "/user/logout", false);

// Folder management drivers
export const newFolder = makeDriver("POST", "/folder/new", true);
export const updateFolder = makeDriver("PATCH", "/folder/update", true);
export const deleteFolder = makeDriver("DELETE", "/folder/delete", false);

// Bookmark management drivers
export const newBookmark = makeDriver("POST", "/bookmark/new", true);
export const updateBookmark = makeDriver("PATCH", "/bookmark/update", true);
export const deleteBookmark = makeDriver("DELETE", "/bookmark/delete", false);

// Views management drivers
export const getSidebarContent = makeDriver("GET", "/views/sidebar", false);
export const getFolderContents = makeDriver("GET", "/views/contents", false);
export const getBookmarkMetadata = makeDriver("GET", "/views/meta", false);

// Search management drivers
export const getSearchContent = makeDriver("GET", "/search/content", false);
export const getSearchSuggestions = makeDriver(
  "GET",
  "/search/suggestion",
  false
);
