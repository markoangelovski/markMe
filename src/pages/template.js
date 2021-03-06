import Router from "next/router";
import { useEffect, useState } from "react";

import Header from "../components/Header/Header.js";

import { auth } from "../drivers/backend.driver";

const Home = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await auth({});

        if (res.status >= 400) {
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

  if (!userAuthenticated) return null;

  return (
    <>
      <Header />
      <div className="h-screen flex flex-col">
        <header className="flex flex-shrink-0">
          <div className="w-64 flex-shrink-0 px-4 py-3 bg-gray-800">
            <button className="w-full flex items-center">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fit=facearea&facepad=4&w=144&q=80"
              />
              <span className="ml-4 mr-2 text-sm font-medium text-white">
                Monica White
              </span>
              <svg
                className="ml-auto h-6 w-6 stroke-current text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 10l-4 4-4-4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between px-6 bg-gray-700">
            <nav className="flex">
              <a
                href="#"
                className="inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600"
              >
                Mailbox
              </a>
              <a
                href="#"
                className="ml-2 inline-block px-3 py-2 leading-none rounded-lg text-sm font-medium text-white hover:bg-gray-600 "
              >
                Customers
              </a>
              <a
                href="#"
                className="ml-2 inline-block px-3 py-2 leading-none rounded-lg text-sm font-medium text-white hover:bg-gray-600"
              >
                Reporting
              </a>
              <a
                href="#"
                className="ml-2 inline-block px-3 py-2 leading-none rounded-lg text-sm font-medium text-white hover:bg-gray-600"
              >
                Manage
              </a>
            </nav>
            <div className="flex items-center">
              <div className="relative w-64">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    className="h-5 w-5 fill-current text-gray-500"
                    viewBox="0 0 53.627 53.627"
                  >
                    <path d="M53.627 49.385L37.795 33.553C40.423 30.046 42 25.709 42 21 42 9.42 32.58 0 21 0S0 9.42 0 21s9.42 21 21 21c4.709 0 9.046-1.577 12.553-4.205l15.832 15.832 4.242-4.242zM2 21C2 10.523 10.523 2 21 2s19 8.523 19 19-8.523 19-19 19S2 31.477 2 21zm33.567 15.093c.178-.172.353-.347.525-.525.146-.151.304-.29.445-.445l14.262 14.262-1.415 1.415-14.261-14.263c.155-.141.293-.299.444-.444z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="block pl-9 pr-4 py-2 w-full bg-gray-900 rounded-lg text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
                />
              </div>
              <button className="ml-5 text-gray-400 hover:text-gray-200">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 55 55">
                  <path d="M51.376 45.291C46.716 40.66 44.354 35.179 44.354 29v-8.994c.043-6.857-4.568-11.405-8.53-13.216a20.104 20.104 0 00-3.494-1.216V5c0-2.757-2.243-5-5-5s-5 2.243-5 5v.661a19.8 19.8 0 00-3.146 1.138C14.805 8.817 10.369 13.681 10.329 20v9c0 6.388-2.256 11.869-6.705 16.291a1.002 1.002 0 00.535 1.695l9.491 1.639c1.768.305 3.396.555 4.945.761C20.341 52.806 23.768 55 27.512 55c3.745 0 7.173-2.196 8.917-5.618 1.543-.205 3.163-.454 4.921-.758l9.49-1.639a1 1 0 00.536-1.694zM24.329 5c0-1.654 1.346-3 3-3s3 1.346 3 3v.182a19.883 19.883 0 00-6 .047V5zm3.183 48c-2.532 0-4.898-1.258-6.417-3.315 2.235.23 4.321.346 6.406.346 2.093 0 4.186-.116 6.43-.349C32.411 51.741 30.044 53 27.512 53zm13.498-6.347c-1.919.331-3.678.6-5.34.812h-.006c-.732.093-1.444.174-2.141.244l-.022.002c-.637.064-1.26.115-1.876.16l-.35.024a58.02 58.02 0 01-1.587.083c-.108.004-.216.01-.324.013a55.413 55.413 0 01-5.613-.095l-.373-.025c-.6-.043-1.207-.094-1.828-.155l-.064-.006a80.764 80.764 0 01-2.126-.242h-.009a121.441 121.441 0 01-5.361-.814L6.329 45.33c3.983-4.554 6-10.038 6-16.33v-8.994c.034-5.435 3.888-9.637 7.691-11.391a17.877 17.877 0 013.497-1.183c.01-.002.021-.001.031-.003a18.18 18.18 0 017.58-.068c.013.003.026-.003.039-.001 1.304.272 2.588.684 3.825 1.249 3.689 1.687 7.396 5.861 7.361 11.392v9c0 6.033 2.175 11.643 6.313 16.331l-7.656 1.321z" />
                  <path d="M33.746 11.338c-3.875-1.771-8.62-1.773-12.469.002-2.195 1.012-5.918 3.973-5.948 8.654A1 1 0 0016.323 21h.006a1 1 0 001-.994c.023-3.677 3.019-6.035 4.785-6.85 3.331-1.537 7.446-1.533 10.799 0a1 1 0 00.833-1.818z" />
                </svg>
              </button>
              <button className="ml-4 text-gray-400 hover:text-gray-200">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 52 52">
                  <path d="M26 0C11.663 0 0 11.663 0 26s11.663 26 26 26 26-11.663 26-26S40.337 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
                  <path d="M26 37a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1zM26.113 9.001L25.998 9a7.938 7.938 0 00-5.615 2.304A7.944 7.944 0 0018 17a1 1 0 102 0c0-1.618.635-3.136 1.787-4.272 1.153-1.137 2.688-1.765 4.299-1.727 3.161.044 5.869 2.752 5.913 5.913a5.973 5.973 0 01-2.751 5.132C26.588 23.762 25 26.794 25 30.158V33a1 1 0 102 0v-2.842c0-2.642 1.276-5.105 3.332-6.432a7.96 7.96 0 003.667-6.84c-.06-4.287-3.598-7.825-7.886-7.885z" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <div className="flex-1 flex overflow-hidden">
          <div className="w-64 p-6 bg-gray-100 overflow-y-auto">
            <nav>
              <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Mailboxes
              </h2>
              <div className="mt-3">
                <a
                  href="#"
                  className="-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium bg-gray-200 rounded-lg"
                >
                  <span className="inline-flex">
                    <svg
                      className="h-5 w-5 fill-current text-gray-700"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19.93 8.664l-2.676-5.367a.671.671 0 00-.602-.375H3.348a.671.671 0 00-.602.375L.07 8.664a.68.68 0 00-.07.3v7.442c0 .371.3.672.676.672h18.648c.375 0 .676-.3.676-.672V8.965a.68.68 0 00-.07-.3zM3.766 4.27h12.468l2.016 4.046h-4.363a.677.677 0 00-.66.536c-.024.113-.618 2.789-3.34 2.789-2.719 0-3.317-2.676-3.34-2.786a.67.67 0 00-.66-.539H1.75zm14.886 11.46H1.348V9.664h4.027c.477 1.379 1.824 3.324 4.512 3.324 2.691 0 4.039-1.945 4.511-3.324h4.254zm0 0" />
                    </svg>
                    <span className="ml-2 text-gray-900">Inbox</span>
                  </span>
                  <span className="inline-block w-9 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">
                    6
                  </span>
                </a>
                <a
                  href="#"
                  className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
                >
                  <span className="inline-flex">
                    <svg
                      className="h-5 w-5 fill-current text-gray-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19.93 8.664l-2.676-5.367a.671.671 0 00-.602-.375H3.348a.671.671 0 00-.602.375L.07 8.664a.68.68 0 00-.07.3v7.442c0 .371.3.672.676.672h18.648c.375 0 .676-.3.676-.672V8.965a.68.68 0 00-.07-.3zM3.766 4.27h12.468l2.016 4.046h-4.363a.677.677 0 00-.66.536c-.024.113-.618 2.789-3.34 2.789-2.719 0-3.317-2.676-3.34-2.786a.67.67 0 00-.66-.539H1.75zm14.886 11.46H1.348V9.664h4.027c.477 1.379 1.824 3.324 4.512 3.324 2.691 0 4.039-1.945 4.511-3.324h4.254zm0 0" />
                    </svg>
                    <span className="ml-2 text-gray-700">Flagged</span>
                  </span>
                  {/* <span className="inline-block w-9 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">
                    6
                  </span> */}
                </a>
                <a
                  href="#"
                  className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
                >
                  <span className="inline-flex">
                    <svg
                      className="h-5 w-5 fill-current text-gray-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19.93 8.664l-2.676-5.367a.671.671 0 00-.602-.375H3.348a.671.671 0 00-.602.375L.07 8.664a.68.68 0 00-.07.3v7.442c0 .371.3.672.676.672h18.648c.375 0 .676-.3.676-.672V8.965a.68.68 0 00-.07-.3zM3.766 4.27h12.468l2.016 4.046h-4.363a.677.677 0 00-.66.536c-.024.113-.618 2.789-3.34 2.789-2.719 0-3.317-2.676-3.34-2.786a.67.67 0 00-.66-.539H1.75zm14.886 11.46H1.348V9.664h4.027c.477 1.379 1.824 3.324 4.512 3.324 2.691 0 4.039-1.945 4.511-3.324h4.254zm0 0" />
                    </svg>
                    <span className="ml-2 text-gray-700">Drafts</span>
                  </span>
                  <span className="inline-block w-9 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">
                    2
                  </span>
                </a>
                <a
                  href="#"
                  className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
                >
                  <span className="inline-flex">
                    <svg
                      className="h-5 w-5 fill-current text-gray-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19.93 8.664l-2.676-5.367a.671.671 0 00-.602-.375H3.348a.671.671 0 00-.602.375L.07 8.664a.68.68 0 00-.07.3v7.442c0 .371.3.672.676.672h18.648c.375 0 .676-.3.676-.672V8.965a.68.68 0 00-.07-.3zM3.766 4.27h12.468l2.016 4.046h-4.363a.677.677 0 00-.66.536c-.024.113-.618 2.789-3.34 2.789-2.719 0-3.317-2.676-3.34-2.786a.67.67 0 00-.66-.539H1.75zm14.886 11.46H1.348V9.664h4.027c.477 1.379 1.824 3.324 4.512 3.324 2.691 0 4.039-1.945 4.511-3.324h4.254zm0 0" />
                    </svg>
                    <span className="ml-2 text-gray-700">Assigned</span>
                  </span>
                  <span className="inline-block w-9 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">
                    1
                  </span>
                </a>
                <a
                  href="#"
                  className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
                >
                  <span className="inline-flex">
                    <svg
                      className="h-5 w-5 fill-current text-gray-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19.93 8.664l-2.676-5.367a.671.671 0 00-.602-.375H3.348a.671.671 0 00-.602.375L.07 8.664a.68.68 0 00-.07.3v7.442c0 .371.3.672.676.672h18.648c.375 0 .676-.3.676-.672V8.965a.68.68 0 00-.07-.3zM3.766 4.27h12.468l2.016 4.046h-4.363a.677.677 0 00-.66.536c-.024.113-.618 2.789-3.34 2.789-2.719 0-3.317-2.676-3.34-2.786a.67.67 0 00-.66-.539H1.75zm14.886 11.46H1.348V9.664h4.027c.477 1.379 1.824 3.324 4.512 3.324 2.691 0 4.039-1.945 4.511-3.324h4.254zm0 0" />
                    </svg>
                    <span className="ml-2 text-gray-700">Closed</span>
                  </span>
                  {/*  <span className="inline-block w-9 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">
                    6
                  </span> */}
                </a>
                <a
                  href="#"
                  className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
                >
                  <span className="inline-flex">
                    <svg
                      className="h-5 w-5 fill-current text-gray-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19.93 8.664l-2.676-5.367a.671.671 0 00-.602-.375H3.348a.671.671 0 00-.602.375L.07 8.664a.68.68 0 00-.07.3v7.442c0 .371.3.672.676.672h18.648c.375 0 .676-.3.676-.672V8.965a.68.68 0 00-.07-.3zM3.766 4.27h12.468l2.016 4.046h-4.363a.677.677 0 00-.66.536c-.024.113-.618 2.789-3.34 2.789-2.719 0-3.317-2.676-3.34-2.786a.67.67 0 00-.66-.539H1.75zm14.886 11.46H1.348V9.664h4.027c.477 1.379 1.824 3.324 4.512 3.324 2.691 0 4.039-1.945 4.511-3.324h4.254zm0 0" />
                    </svg>
                    <span className="ml-2 text-gray-700">Junk</span>
                  </span>
                  {/*  <span className="inline-block w-9 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">
                    6
                  </span> */}
                </a>
              </div>
              <h2 className="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Folders
              </h2>
              <div className="mt-4">
                <a href="#" className="block text-sm font-medium text-gray-700">
                  Refunds
                </a>
                <a
                  href="#"
                  className="mt-4 block text-sm font-medium text-gray-700"
                >
                  Discounts
                </a>
                <a
                  href="#"
                  className="mt-4 block text-sm font-medium text-gray-700"
                >
                  Bugs
                </a>
              </div>
            </nav>
          </div>
          <main className="flex-1 flex bg-gray-200">
            <div className="relative flex flex-col w-full max-w-xs flex-grow border-l border-r bg-gray-200">
              <div className="flex-shrink-0 px-4 py-2 flex items-center justify-between border-b">
                <button className="flex items-center text-xs font-semibold text-gray-600">
                  Sorted by date
                  <svg
                    className="ml-1 h-6 w-6 stroke-current text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 10l-4 4-4-4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    className="h-4 w-4 fill-current text-gray-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.91 0H2.09c-.371 0-.676.3-.676.676v2.851c0 .168.063.332.176.453l6.004 6.594v8.75c0 .242.129.465.336.586a.687.687 0 00.676 0l3.46-1.976a.683.683 0 00.34-.586v-6.774L18.41 3.98a.665.665 0 00.176-.453V.676A.676.676 0 0017.91 0zm-.676 3.266L11.23 9.859a.682.682 0 00-.175.457v6.641l-2.11 1.207v-7.848a.682.682 0 00-.175-.457L2.766 3.266V1.348h14.468zm0 0" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <a href="#" className="block px-6 pt-3 pb-4 bg-white">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
                <a href="#" className="block px-6 pt-3 pb-4 bg-white border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
                <a href="#" className="block px-6 pt-3 pb-4 bg-white border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
                <a href="#" className="block px-6 pt-3 pb-4 bg-white border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
                <a href="#" className="block px-6 pt-3 pb-4 bg-white border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
                <a href="#" className="block px-6 pt-3 pb-4 bg-white border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
                <a href="#" className="block px-6 pt-3 pb-4 bg-white border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
                <a href="#" className="block px-6 pt-3 pb-4 bg-white border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
                <a href="#" className="block px-6 pt-3 pb-4 bg-white border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
                <a href="#" className="block px-6 pt-3 pb-4 bg-white border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
                <a href="#" className="block px-6 pt-3 pb-4 bg-white border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Robertson
                    </span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-900">Refund</p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores laudantium...
                  </p>
                </a>
              </div>
            </div>
            <div className="flex-1 flex flex-col w-0">
              <div className="relative shadow-md">
                <div className="flex items-center justify-between px-5 py-4 bg-gray-100 border-b">
                  <div className="flex itens-center">
                    <button>
                      <svg
                        className="h-6 w-6 fill-current text-gray-600"
                        viewBox="0 0 20 20"
                      >
                        <path d="M17.125.055a.476.476 0 00-.492.03L3.57 9.095V.477a.476.476 0 10-.953 0v19.046a.476.476 0 10.953 0v-8.617l13.063 9.012a.488.488 0 00.492.027.481.481 0 00.258-.422V.477a.481.481 0 00-.258-.422zm-.695 18.562L3.934 10 16.43 1.383zm0 0" />
                      </svg>
                    </button>
                    <button className="ml-6">
                      <svg
                        className="h-6 w-6 fill-current text-gray-600"
                        viewBox="0 0 59 59"
                      >
                        <path d="M26.5 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a1 1 0 100 2c2.757 0 5-2.243 5-5s-2.243-5-5-5a1 1 0 100 2z" />
                        <path d="M32.5 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a1 1 0 100 2c2.757 0 5-2.243 5-5s-2.243-5-5-5a1 1 0 100 2z" />
                        <path d="M43.399 4A5.009 5.009 0 0038.5 0a1 1 0 100 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a1 1 0 100 2 5.01 5.01 0 004.899-4H53.5v10h-1a1 1 0 100 2h1v8h-1a1 1 0 100 2h1v8h-1a1 1 0 100 2h1v7h-12v12h-36v-9h1a1 1 0 100-2h-1v-8h1a1 1 0 100-2h-1v-8h1a1 1 0 100-2h-1v-8h1a1 1 0 100-2h-1V6h14a1 1 0 100-2h-1.816A2.995 2.995 0 0120.5 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a1 1 0 100 2c2.757 0 5-2.243 5-5s-2.243-5-5-5a5.01 5.01 0 00-4.899 4H3.5v55h52V4H43.399zm.101 43h8.586L43.5 55.586V47zm1.415 10l8.585-8.585V57h-8.585z" />
                        <path d="M30.5 16h-2a1 1 0 100 2h2a1 1 0 100-2zM24.5 16h-2a1 1 0 100 2h2a1 1 0 100-2zM18.5 16h-2a1 1 0 100 2h2a1 1 0 100-2zM40.5 18h2a1 1 0 100-2h-2a1 1 0 100 2zM46.5 18h2a1 1 0 100-2h-2a1 1 0 100 2zM36.5 16h-2a1 1 0 100 2h2a1 1 0 100-2zM13.5 17a1 1 0 00-1-1v-4a1 1 0 10-2 0v4a1 1 0 100 2v8a1 1 0 100 2v8a1 1 0 100 2v8a1 1 0 100 2v5a1 1 0 102 0v-5a1 1 0 100-2v-8a1 1 0 100-2v-8a1 1 0 100-2v-8a1 1 0 001-1zM36.5 26h-2a1 1 0 100 2h2a1 1 0 100-2zM30.5 26h-2a1 1 0 100 2h2a1 1 0 100-2zM18.5 26h-2a1 1 0 100 2h2a1 1 0 100-2zM24.5 26h-2a1 1 0 100 2h2a1 1 0 100-2zM46.5 28h2a1 1 0 100-2h-2a1 1 0 100 2zM40.5 28h2a1 1 0 100-2h-2a1 1 0 100 2zM40.5 38h2a1 1 0 100-2h-2a1 1 0 100 2zM46.5 38h2a1 1 0 100-2h-2a1 1 0 100 2zM36.5 36h-2a1 1 0 100 2h2a1 1 0 100-2zM30.5 36h-2a1 1 0 100 2h2a1 1 0 100-2zM18.5 36h-2a1 1 0 100 2h2a1 1 0 100-2zM24.5 36h-2a1 1 0 100 2h2a1 1 0 100-2zM24.5 46h-2a1 1 0 100 2h2a1 1 0 100-2zM36.5 46h-2a1 1 0 100 2h2a1 1 0 100-2zM30.5 46h-2a1 1 0 100 2h2a1 1 0 100-2zM18.5 46h-2a1 1 0 100 2h2a1 1 0 100-2z" />
                      </svg>
                    </button>
                    <button className="ml-6">
                      <svg
                        className="h-6 w-6 fill-current text-gray-600"
                        viewBox="0 0 55 55"
                      >
                        <path d="M55 27.5C55 12.337 42.663 0 27.5 0S0 12.337 0 27.5c0 8.009 3.444 15.228 8.926 20.258l-.026.023.892.752c.058.049.121.089.179.137.474.393.965.766 1.465 1.127.162.117.324.234.489.348.534.368 1.082.717 1.642 1.048.122.072.245.142.368.212a27.44 27.44 0 001.88.98l.142.064a27.252 27.252 0 006.651 2.105l.184.033c.724.125 1.456.225 2.197.292.09.008.18.013.271.021.738.061 1.484.1 2.24.1.749 0 1.488-.039 2.222-.098l.279-.021a27.808 27.808 0 002.178-.287l.187-.034a27.251 27.251 0 006.557-2.055c.076-.035.153-.068.229-.104a27.639 27.639 0 002.25-1.189 27.514 27.514 0 001.581-1c.185-.126.366-.259.549-.391.439-.316.87-.642 1.289-.983.093-.075.193-.14.284-.217l.915-.764-.027-.023C51.523 42.802 55 35.55 55 27.5zm-53 0C2 13.439 13.439 2 27.5 2S53 13.439 53 27.5c0 7.577-3.325 14.389-8.589 19.063a7.494 7.494 0 00-.893-.537l-8.467-4.233a2.217 2.217 0 01-1.232-1.993v-2.957c.196-.242.403-.516.617-.817a20.378 20.378 0 002.616-5.123 3.63 3.63 0 002.085-3.289v-3.545c0-.867-.318-1.708-.887-2.369v-4.667c.052-.519.236-3.448-1.883-5.864C34.524 9.065 31.541 8 27.5 8s-7.024 1.065-8.867 3.168c-2.119 2.416-1.935 5.345-1.883 5.864v4.667a3.644 3.644 0 00-.887 2.369v3.545c0 1.101.494 2.128 1.34 2.821.81 3.173 2.477 5.575 3.093 6.389v2.894a2.23 2.23 0 01-1.162 1.958l-7.907 4.313a7.227 7.227 0 00-.752.476C5.276 41.792 2 35.022 2 27.5zm40.459 20.632c-.35.254-.706.5-1.067.735-.166.108-.331.216-.5.321-.472.292-.952.57-1.442.83-.108.057-.217.111-.326.167a25.481 25.481 0 01-3.488 1.476l-.127.043c-.627.208-1.262.393-1.904.552l-.006.001a25.59 25.59 0 01-1.964.402l-.054.01c-.621.101-1.247.174-1.875.229-.111.01-.222.017-.334.025-.621.047-1.245.077-1.872.077a25.43 25.43 0 01-1.895-.078c-.109-.008-.218-.015-.326-.025a25.862 25.862 0 01-1.89-.233l-.084-.015a25.405 25.405 0 01-3.89-.971l-.118-.04a25.86 25.86 0 01-1.862-.713l-.013-.006a26.094 26.094 0 01-1.705-.816c-.073-.038-.147-.074-.219-.113a25.7 25.7 0 01-1.939-1.155 25.417 25.417 0 01-1.338-.933l-.133-.104.096-.054 7.907-4.313a4.229 4.229 0 002.205-3.714l-.001-3.602-.23-.278c-.022-.025-2.184-2.655-3.001-6.216l-.091-.396-.341-.221a1.657 1.657 0 01-.769-1.392v-3.545c0-.465.197-.898.557-1.223l.33-.298v-5.57l-.009-.131c-.003-.024-.298-2.429 1.396-4.36C21.583 10.837 24.061 10 27.5 10c3.426 0 5.896.83 7.346 2.466 1.692 1.911 1.415 4.361 1.413 4.381l-.009 5.701.33.298c.359.324.557.758.557 1.223v3.545a1.67 1.67 0 01-1.181 1.575l-.497.153-.16.495a18.5 18.5 0 01-2.496 5.032c-.262.37-.517.698-.736.949l-.248.283V39.8c0 1.612.896 3.062 2.338 3.782l8.467 4.233.16.083c-.107.081-.217.156-.325.234z" />
                      </svg>
                    </button>
                    <button className="ml-6">
                      <svg
                        className="h-6 w-6 fill-current text-gray-600"
                        viewBox="0 0 59 59"
                      >
                        <path d="M20.187 28.313a.999.999 0 10-1.414 1.414l9.979 9.979c.186.189.44.294.706.294.007 0 .014-.004.021-.004.007 0 .013.004.021.004a.981.981 0 00.795-.423l9.891-9.891a.999.999 0 10-1.414-1.414L30.5 36.544V1a1 1 0 10-2 0v35.628l-8.313-8.315z" />
                        <path d="M36.5 16a1 1 0 100 2h13v39h-40V18h13a1 1 0 100-2h-15v43h44V16h-15z" />
                      </svg>
                    </button>
                    <button className="ml-6">
                      <svg
                        className="h-6 w-6 fill-current text-gray-600"
                        viewBox="0 0 60 60"
                      >
                        <path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <svg
                        className="h-6 w-6 fill-current text-gray-600"
                        viewBox="0 0 42 42"
                      >
                        <path d="M42 20H22V0h-2v20H0v2h20v20h2V22h20z" />
                      </svg>
                    </button>
                    <button className="ml-4">
                      <svg
                        className="h-6 w-6 fill-current text-gray-600"
                        viewBox="0 0 42 42"
                      >
                        <path d="M0 20h42v2H0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between px-5 py-4 bg-white">
                  <h3 className="text-xl text-grey-900 truncate">
                    Re: Student discount
                  </h3>
                  <div className="flex-shrink-0">
                    <span>#1428</span>
                    <span className="ml-2 text-sm font-semibold text-green-900 bg-green-200 rounded-full leading-none px-2 py-1">
                      Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3 flex-1 overflow-y-auto">
                <article className="px-10 pt-6 pb-8 bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                      <span className="text-gray-900">Joe Armstrong</span>
                      <span className="text-gray-600"> wrote</span>
                    </p>
                    <div className="flex items-center">
                      <span>Yesterday at 7:24 AM</span>
                      <img
                        className="ml-5 h-9 w-9 rounded-full object-cover"
                        src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIzfHxwb3J0YWl0JTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&q=60"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-gray-800 text-sm">
                    <p>Thanks so much!! Can't wait to try it out :)</p>
                  </div>
                </article>
                <article className="mt-3 px-10 pt-6 pb-8 bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                      <span className="text-gray-900">Monica White</span>
                      <span className="text-gray-600"> wrote</span>
                    </p>
                    <div className="flex items-center">
                      <span>Yesterday at 7:24 AM</span>
                      <img
                        className="ml-5 h-9 w-9 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fit=facearea&facepad=4&w=144&q=80"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-gray-800 text-sm">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nulla doloremque quod nisi ea distinctio aperiam
                      accusantium ut enim fugiat quia! Praesentium repellendus
                      necessitatibus aperiam cum libero nulla aliquid dolor
                      nobis.
                    </p>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nulla doloremque quod nisi ea distinctio aperiam
                      accusantium ut enim fugiat quia! Praesentium repellendus
                      necessitatibus aperiam cum libero nulla aliquid dolor
                      nobis.
                    </p>
                    <p className="mt-4 font-semibold text-gray-900">
                      Monica White
                    </p>
                    <p>Customer Service</p>
                  </div>
                </article>
                <article className="mt-3 px-10 pt-6 pb-8 bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                      <span className="text-gray-900">Joe Armstrong</span>
                      <span className="text-gray-600"> wrote</span>
                    </p>
                    <div className="flex items-center">
                      <span>Yesterday at 7:24 AM</span>
                      <img
                        className="ml-5 h-9 w-9 rounded-full object-cover"
                        src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIzfHxwb3J0YWl0JTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&q=60"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-gray-800 text-sm">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nulla doloremque quod nisi ea distinctio aperiam
                      accusantium ut enim fugiat quia! Praesentium repellendus
                      necessitatibus aperiam cum libero nulla aliquid dolor
                      nobis.
                    </p>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nulla doloremque quod nisi ea distinctio aperiam
                      accusantium ut enim fugiat quia! Praesentium repellendus
                      necessitatibus aperiam cum libero nulla aliquid dolor
                      nobis.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
