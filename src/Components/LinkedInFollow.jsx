import React from 'react';

function TopTab() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-gray-900">
        <strong className="font-semibold">Stay connected!</strong>
        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
          <circle cx="1" cy="1" r="1" />
        </svg>
        Follow us on LinkedIn to stay connected for the latest updates
      </p>
      <a href="#" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">Join us! <span aria-hidden="true">&rarr;</span></a>
    </div>
  );
}

export default TopTab;
