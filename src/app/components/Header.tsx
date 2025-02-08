
import React from 'react';

import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="bg-white border-b border-spacing-8 text-black">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button aria-label="Search" className="text-xl">
            <CiSearch />
          </button>
          <h1 className="text-xl">
            <Link href="/">Avion</Link>
          </h1>
          <div className="flex gap-2 items-center">
            <Link href="/cart" aria-label="Cart" className="text-xl">
              <IoCartOutline />
            </Link>
            <button aria-label="User Profile" className="text-xl">
              <IoPersonCircleOutline />
            </button>
          </div>
        </div>
      </header>

      <nav>
        <ul className="flex flex-wrap justify-center items-center gap-4 text-black md:gap-8 mt-4 text-sm text-center w-full">
          <li>
            <Link href="/">Plant Pots</Link>
          </li>
          <li>
            <Link href="/">Ceramics</Link>
          </li>
          <li>
            <Link href="/tables">Tables</Link>
          </li>
          <li>
            <Link href="/chairs">Chairs</Link>
          </li>
          <li>
            <Link href="/">Crockery</Link>
          </li>
          <li>
            <Link href="/">Tableware</Link>
          </li>
          <li>
            <Link href="/">Cutlery</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

















// const Header = () => {
//     return (
//         <>
//            <header className="bg-white border-b border-spacing-8">
//   <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//     <CiSearch />
//     <h1 className="text-xl">
//       <Link href="/">Avion</Link>
//     </h1>
//     <div className="flex gap-2">
//       <Link href="/card">
//         <IoCartOutline />
//       </Link>
//       <IoPersonCircleOutline />
//     </div>
//   </div>
// </header>
// <div>
//   <nav className="flex">
//     <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-4 text-sm text-center w-full md:w-auto md:ml-[30%]">
//       <li>
//         <Link href="/">Plant Pots</Link>
//       </li>
//       <li>
//         <Link href="/">Ceramics</Link>
//       </li>
//       <li>
//         <Link href="/">Tables</Link>
//       </li>
//       <li>
//         <Link href="/chairs">Chairs</Link>
//       </li>
//       <li>
//         <Link href="/">Crokery</Link>
//       </li>
//       <li>
//         <Link href="/">TableWare</Link>
//       </li>
//       <li>
//         <Link href="/">Cutlery</Link>
//       </li>
//     </ul>
//   </nav>
// </div>
// </>
// )
// }
// export default Header