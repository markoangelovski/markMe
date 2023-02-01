import React from "react";

const Footer = ({ folderCount, bookmarkCount }) => {
  return (
    <footer className="flex-shrink-0 flex justify-end bg-gray-300 border-t border-gray-100">
      <span>
        <span className="text-sm text-gray-600">{bookmarkCount}</span>
        <svg
          className="inline h-4 w-4 mx-1 fill-current text-gray-700"
          viewBox="0 0 56.868 56.868"
        >
          <path d="M52.934 6.136c0-3.324-2.684-6.053-6-6.126V0h-36.91a6.096 6.096 0 00-6.09 6.09v50.778l19-12.666 19 12.666V25h11V6.136zm-13 46.996l-17-11.334-17 11.334V6.09A4.095 4.095 0 0110.024 2H42.04a6.993 6.993 0 00-1.965 3.611l-.001.003A6.86 6.86 0 0039.934 7V53.132zm11-30.132h-9V7c0-.34.035-.671.1-.992a5.034 5.034 0 013.728-3.855c.036-.009.068-.025.104-.032.243-.054.498-.073.753-.089.083-.005.162-.024.246-.025 2.246.037 4.069 1.881 4.069 4.129V23z" />
        </svg>
        <span className="text-sm text-gray-600">{folderCount}</span>
        <svg
          className="inline h-4 w-4 mx-1 fill-current text-gray-700"
          viewBox="0 0 60 60"
        >
          <path d="M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z" />
          <path d="M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z" />
          <path d="M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z" />
        </svg>
      </span>
    </footer>
  );
};

export default Footer;
