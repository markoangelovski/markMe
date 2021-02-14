import Link from "next/link";

const Folder = ({ folder }) => {
  return (
    <Link href={`/${folder._id}`}>
      <a className="flex-shrink-0 flex items-center" draggable="true">
        <svg
          className="inline h-5 w-5 fill-current text-gray-700"
          viewBox="0 0 60 60"
        >
          <path d="M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z" />
          <path d="M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z" />
          <path d="M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z" />
        </svg>
        <span className="ml-2 py-1 pl-1 pr-2 text-sm whitespace-pre text-gray-900 hover:bg-gray-300">
          {folder.title}
        </span>
      </a>
    </Link>
  );
};

export default Folder;