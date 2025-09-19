'use client'

import Link from "next/link";
import { useState } from "react";
import ToogleButton from "./toggle-button";



export default function SideBar() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex">
            <ToogleButton isOpen={isOpen} setIsOpen={setIsOpen}/>

            {isOpen && (
        <aside className="w-64 bg-gray-800 text-white p-4 rounded-2xl flex flex-col min-h-screen items-center">
          <nav>
            <ul className="w-full">
              <li className="hover:bg-red-500 rounded-2xl w-full text-center mb-2">
                <Link className="w-full block" href="/">Home</Link>
              </li>
              <li className="hover:bg-red-500 rounded-2xl w-full text-center">
                <Link className="w-full block" href="/tools">Tools</Link>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
}