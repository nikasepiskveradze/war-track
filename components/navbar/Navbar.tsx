import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex items-center py-6 px-6 container mx-auto justify-between">
      <div>
        <Link href="/" className="font-bold text-3xl tracking-widest">
          WAR TRACK
        </Link>
      </div>

      <div>
        <Link
          href="https://docs.war-track.com/"
          target="_blank"
          className="font-bold text-blue-500"
        >
          Docs
        </Link>
        <Link
          href="https://github.com/nikasepiskveradze/war-track-api"
          target="_blank"
          className="ml-5 font-bold text-blue-500"
        >
          Github
        </Link>
        <Link
          href="https://war-track.com/api/"
          target="_blank"
          className="ml-5 font-bold text-blue-500"
        >
          Swagger
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
