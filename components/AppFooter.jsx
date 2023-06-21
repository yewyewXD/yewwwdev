import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="py-5 px-4 text-sm text-dark border-t border-gray-700 flex justify-between items-center">
      <span>
        Copyright &#169;{new Date().getFullYear()} yewyewXD. All right reserved.
      </span>

      <div className="flex items-center">
        <Link
          className="hoverOpacity"
          href="https://www.linkedin.com/in/yewyewxd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/brand/linkedin.png"
            alt=""
            height={20}
            width={20}
          />
        </Link>

        <Link
          className="ml-2 hoverOpacity"
          href="https://github.com/yewyewXD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/images/brand/github.png" alt="" height={20} width={20} />
        </Link>
      </div>
    </footer>
  );
}
