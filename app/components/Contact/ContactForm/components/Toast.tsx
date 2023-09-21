import React, { useState, useEffect } from "react";

interface ToastProps {
  isSuccess: boolean;
}

function Toast({ isSuccess }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isSuccess) {
      // Hide the toast after 3 seconds
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeout);
    }
  }, [isSuccess]);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed flex items-center w-full max-w-xs p-4 space-x-4 bottom-5 right-5 text-gray-500 bg-white divide-x z-50 divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } transition-opacity transform delay-300 duration-500 ease-in-out`}
      role="alert"
    >
      <svg
        className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
        />
      </svg>
      <div className="pl-4 text-sm font-normal">Email sent successfully.</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Close"
        onClick={handleCloseClick}
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

export default Toast;
