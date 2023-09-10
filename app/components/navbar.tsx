import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full flex sticky bg-white/70 backdrop-blur-md top-0 z-10 justify-center items-center">
      <nav className="w-full max-w-7xl p-4">
        <div className="hidden md:flex justify-between items-center">
          <div className="flex justify-center items-center space-x-2 w-fit">
            <img src="/logo.svg" alt="logo" />
            <span className="font-semibold font-lora text-xl">DressLy</span>
          </div>
          <ul className="font-bold flex space-x-7 font-poppins leading-normal">
            <li>
              <span className="font-semibold font-poppins text-base leading-relaxed">
                Shop
              </span>
            </li>
            <li>
              <span className="font-semibold font-poppins text-base leading-relaxed">
                New Arrivals
              </span>
            </li>
            <li>
              <span className="font-semibold font-poppins text-base leading-relaxed">
                Sale
              </span>
            </li>
            <li>
              <span className="font-semibold font-poppins text-base leading-relaxed">
                Blog
              </span>
            </li>
          </ul>
          <div className="flex space-x-4 justify-center items-center">
            <button type="button" aria-label="">
              <img src="/magnifier.svg" alt="magnifier" />
            </button>
            <button type="button" aria-label="">
              <img src="/bag.svg" alt="bag" />
            </button>
            <button type="button" aria-label="">
              <img src="/user.svg" alt="user" />
            </button>
          </div>
        </div>
        <div className="flex md:hidden justify-between items-center">
          <button
            type="button"
            aria-label="bar"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XMark /> : <img src="/bar.svg" alt="bar" />}
          </button>
          <Link to="/">
            <div className="space-x-2 flex">
              <img src="/logo.svg" alt="logo" />
              <span className="text-neutral-900 font-lora font-semibold text-2xl">
                DressLy
              </span>
            </div>
          </Link>
          <button type="button" aria-label="bag">
            <img src="/bag.svg" alt="bag" />
          </button>
        </div>
        {isOpen ? (
          <div className="pt-5 md:hidden">
            <ul className="space-y-5">
              <li>
                <span className="font-semibold font-poppins text-base leading-relaxed">
                  Shop
                </span>
              </li>
              <li>
                <span className="font-semibold font-poppins text-base leading-relaxed">
                  New Arrivals
                </span>
              </li>
              <li>
                <span className="font-semibold font-poppins text-base leading-relaxed">
                  Sale
                </span>
              </li>
              <li>
                <span className="font-semibold font-poppins text-base leading-relaxed">
                  Blog
                </span>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

function XMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
