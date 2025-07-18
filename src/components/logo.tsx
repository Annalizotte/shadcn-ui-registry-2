"use client";

import { useEffect, useState } from "react";

export function Logo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <svg
        width="38"
        height="16"
        viewBox="0 0 38 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <path
          d="M35.5756 0.621704L32.1277 8.58727V15.3923H37.4933V0.621704H35.5756Z"
          className="fill-blue-600 dark:fill-sky-500"
        />
        <path
          d="M26.2275 15.3053L29.5335 7.66985C28.467 6.64909 26.8786 5.99896 25.1027 5.99896C25.1027 5.99896 21.8372 5.99896 21.822 5.99896C21.3863 5.99896 21.0316 5.67694 21.0316 5.27998C21.0316 4.86276 21.4243 4.52453 21.9056 4.52453H30.899L32.5912 0.613647H21.9031C18.7238 0.613647 16.1398 2.70782 16.1398 5.27998C16.1398 7.83795 18.7238 9.94428 21.898 9.97263L25.1027 9.97061C25.5612 9.97061 25.9362 10.2947 25.9362 10.6936C25.9362 11.0926 25.5638 11.4167 25.1027 11.4167H13.196V15.3904H25.1027C25.4878 15.3964 25.8652 15.364 26.2275 15.3053Z"
          className="fill-sky-900 dark:fill-white"
        />
        <path
          d="M15.6307 0.607544H0.76001V4.51843H5.33014V15.3599H10.3005V4.51843H13.3836C13.5939 3.01362 14.4096 1.65666 15.6307 0.607544Z"
          className="fill-sky-900 dark:fill-white"
        />
      </svg>

      <h1 className="font-medium uppercase text-xl">page Title</h1>
    </div>
  );
}
