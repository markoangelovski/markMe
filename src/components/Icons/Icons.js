export const FolderIcon = ({
  classList,
  folderCount,
  bookmarkCount,
  showSubFolders
}) => {
  const closed = typeof showSubFolders === "boolean" && !showSubFolders;
  const open = typeof showSubFolders === "boolean" && showSubFolders;
  const withFolders = folderCount && !bookmarkCount;
  const withBookmarks = !folderCount && bookmarkCount;
  const withBoth = folderCount && bookmarkCount;

  // Closed folder containing only folders
  if (closed && withFolders)
    return (
      <svg className={classList} viewBox="0 0 60 60">
        <path d="M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z" />
        <path d="M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z" />
        <path d="M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z" />
      </svg>
    );

  // Closed folder containing only bookmarks
  if (closed && withBookmarks)
    return (
      <svg className={classList} viewBox="0 0 60 60">
        <path d="M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z" />
        <path d="M19 30.5h14a1 1 0 100-2H19a1 1 0 100 2zM41 34.5H19a1 1 0 100 2h22a1 1 0 100-2zM41 40.5H19a1 1 0 100 2h22a1 1 0 100-2z" />
      </svg>
    );

  // Closed folder containing both folders and bookmarks
  if (closed && withBoth)
    return (
      <svg className={classList} viewBox="0 0 60 60">
        <path d="M32.515 7l-5-7H6v4H3v4H0v52h60V7H32.515zM2 58V10h18.485l5 7h.012l4.69 6.551c.195.272.502.417.813.418V24h27v34H2zm56-36H31.537l-3.579-5H58v5zm0-7H26.525l-4.712-6.582-.001-.001L21.515 8H5V6h18.485l5 7H58v2zm-28.485-4l-5-7H8V2h18.485l5 7H58v2H29.515z" />
        <path d="M27 55h28V35H27v20zm2-18h24v16H29V37z" />
        <path d="M33 40h10v2H33zM33 44h16v2H33zM33 48h16v2H33z" />
      </svg>
    );

  // Closed empty folder
  if (closed)
    return (
      <svg className={classList} viewBox="0 0 60 60">
        <path d="M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z" />
      </svg>
    );

  // Open folder containing only folders
  if (open && withFolders)
    return (
      <svg className={classList} viewBox="0 0 60 60">
        <path d="M57.49 21.5H55v-9H26.515l-5-7H2.732A2.736 2.736 0 000 8.232v43.687h.006c-.005.563.17 1.114.522 1.575A2.546 2.546 0 002.565 54.5h44.759c1.156 0 2.174-.779 2.45-1.813L60 24.649v-.177c0-1.722-1.056-2.972-2.51-2.972zm-4.49-7v7h-8v-3a1 1 0 10-2 0v3h-5v-3a1 1 0 10-2 0v3h-5v-3a1 1 0 10-2 0v3h-5v-3a1 1 0 10-2 0v3h-5v-3a1 1 0 10-2 0v3h-2.269c-.143 0-.284.012-.422.035-.974.162-1.786.872-2.028 1.778l-.317.87L5 37.793V20.5h6v-6h42zm-46.586 4L9 15.914V18.5H6.414zM2 8.232c0-.404.329-.732.732-.732h17.753l3.571 5H9.586L3 19.086v24.085l-1 2.728V8.232zm45.869 43.851a.566.566 0 01-.545.417H2.565a.552.552 0 01-.448-.222c-.063-.082-.16-.256-.123-.408L3 49.112v.001l9.16-25.114.026-.082a.566.566 0 01.545-.417H57.49c.38 0 .477.546.502.819L47.869 52.083z" />
      </svg>
    );

  // Open folder containing only bookmarks
  if (open && withBookmarks)
    return (
      <svg className={classList} viewBox="0 0 60 60">
        <path d="M57.49 21.5H55v-7h-2v-4H25.086l-3.571-5H2.732A2.736 2.736 0 000 8.232v43.687h.006c-.005.563.17 1.114.522 1.575A2.546 2.546 0 002.565 54.5h44.759c1.156 0 2.174-.779 2.45-1.813L60 24.649v-.177c0-1.722-1.056-2.972-2.51-2.972zm-4.49 0h-8v-1a1 1 0 10-2 0v1h-5v-1a1 1 0 10-2 0v1h-5v-1a1 1 0 10-2 0v1h-5v-1a1 1 0 10-2 0v1h-5v-1a1 1 0 10-2 0v1h-2.269a2.596 2.596 0 00-1.731.674V16.5h42v5zM5 37.793V22.5h5.695a2.304 2.304 0 00-.414.813l-.317.87L5 37.793zM9 20.5H6.414L7 19.914l2-2V20.5zm42-8v2H9.586L7 17.086V12.5h44zM2 8.232c0-.404.329-.732.732-.732h17.753l2.143 3H5v8.586l-2 2v22.085l-1 2.728V8.232zm45.869 43.851a.566.566 0 01-.545.417H2.565a.552.552 0 01-.448-.222c-.063-.082-.16-.256-.123-.408L3 49.112v.001l9.16-25.114.026-.082a.566.566 0 01.545-.417H57.49c.38 0 .477.546.502.819L47.869 52.083z" />
      </svg>
    );

  // Open folder containing both folders and bookmarks
  if (open && withBoth)
    return (
      <svg className={classList} viewBox="0 0 60 60">
        <path d="M57.49 27H54v-6.268A2.736 2.736 0 0051.268 18H48v-2.414l-.495-.495-.001-.002-7.296-7.296L32.414 0H8v11H2.732A2.736 2.736 0 000 13.732v43.687h.006c-.005.563.17 1.114.522 1.575A2.546 2.546 0 002.565 60h44.759c1.156 0 2.174-.779 2.45-1.813L60 30.149v-.177C60 28.25 58.944 27 57.49 27zm-6.222-7c.403 0 .732.328.732.732V27h-4v-7h3.268zM33 3.415L44.586 15H33V3.415zM10 2h21v15h15v10H12.731c-.143 0-.284.012-.422.035-.974.162-1.786.872-2.028 1.778l-.281.772V2zM2 13.732c0-.404.329-.732.732-.732H8v22.035L2 51.399V13.732zm45.869 43.851a.565.565 0 01-.545.417H2.565a.552.552 0 01-.448-.222c-.063-.082-.16-.256-.123-.408L8 40.898v.005l4.16-11.404.026-.082a.566.566 0 01.545-.417H57.49c.38 0 .477.546.502.819L47.869 57.583z" />
        <path d="M16 17h10a1 1 0 100-2H16a1 1 0 100 2zM16 10h10a1 1 0 100-2H16a1 1 0 100 2zM16 24h24a1 1 0 100-2H16a1 1 0 100 2z" />
      </svg>
    );

  // Open empty folder
  if (open)
    return (
      <svg className={classList} viewBox="0 0 60 60">
        <path d="M57.49 21.5H54v-6.268a2.735 2.735 0 00-2.732-2.732H26.515l-5-7H2.732A2.736 2.736 0 000 8.232v43.687h.006c-.005.563.17 1.114.522 1.575A2.546 2.546 0 002.565 54.5h44.759c1.156 0 2.174-.779 2.45-1.813L60 24.649v-.177c0-1.722-1.056-2.972-2.51-2.972zM2 8.232c0-.404.329-.732.732-.732h17.753l5 7h25.782c.404 0 .732.328.732.732V21.5H12.731c-.144 0-.287.012-.426.036-.973.163-1.782.873-2.023 1.776L2 45.899V8.232zm45.869 43.851a.566.566 0 01-.545.417H2.565a.552.552 0 01-.448-.222c-.063-.082-.16-.256-.123-.408l10.191-27.953a.566.566 0 01.545-.417H57.49c.38 0 .477.546.502.819L47.869 52.083z" />
      </svg>
    );

  // For initial render when data is not available, don't render anything.
  return null;
};

export const BookmarkIcon = ({ classList }) => (
  <svg className={classList} viewBox="0 0 60 60">
    <path d="M52.934 6.136c0-3.324-2.684-6.053-6-6.126V0h-36.91a6.096 6.096 0 00-6.09 6.09v50.778l19-12.666 19 12.666V25h11V6.136zm-13 46.996l-17-11.334-17 11.334V6.09A4.095 4.095 0 0110.024 2H42.04a6.993 6.993 0 00-1.965 3.611l-.001.003A6.86 6.86 0 0039.934 7V53.132zm11-30.132h-9V7c0-.34.035-.671.1-.992a5.034 5.034 0 013.728-3.855c.036-.009.068-.025.104-.032.243-.054.498-.073.753-.089.083-.005.162-.024.246-.025 2.246.037 4.069 1.881 4.069 4.129V23z" />
  </svg>
);

export const Favicon = ({ classList, icon }) => (
  <img
    className={classList}
    src={icon}
    alt=""
    onError={e => (e.target.src = "/favicon.ico")}
  />
);
