"use client";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

function useOutsideAlerter(ref, setIsOpen) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen, ref]);
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsOpen);

  return (
    <header className="" ref={wrapperRef}>
      <nav className="flex flex-wrap items-center justify-between w-full ">
        <div>
          <Link className="text-xl text-primary font-bold" href={"/"}>
            Next Helpdesk
          </Link>
        </div>

        <svg
          onClick={() => setIsOpen(!isOpen)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 cursor-pointer  md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div
          className={
            isOpen
              ? "w-full md:flex md:items-center md:w-auto "
              : "hidden w-full md:flex md:items-center md:w-auto "
          }
        >
          <ul
            className="pt-2 text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link href={"/"} className="md:px-4 py-2 block ">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/tickets"} className="md:px-4 py-2 block ">
                Tickets
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
