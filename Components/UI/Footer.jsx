import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <footer className="p-4 relative bottom-0 z-10  pb-4 mx-auto text-white  footer footer-center bg-base-300 text-base-content">
        <div>
          <p className="flex items-center justify-center text-xl font-grace">
            Made with ❤️ by
            <Link
              href="/team/current-team"
              className="text-2xl text-red-400 cursor-pointer "
            >
              {" "}
              Team Vibhav{" "}
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
