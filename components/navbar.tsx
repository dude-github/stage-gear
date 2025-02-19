// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// const navMenu = [
//   { name: "Home", link: "/" },
//   { name: "About", link: "/about" },
//   { name: "EQUIPMENT", link: "/equipment" },
//   { name: "Projects", link: "/projects" },
//   { name: "Services", link: "/services" },
//   { name: "Contact", link: "/contact" },
// ];

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };
//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-evenly w-full p-4 bg-black text-white uppercase font-bold">
//       {/* Logo */}
//       <div className="flex justify-start items-center" id="nav-logo">
//         <h1 className="font-extrabold text-3xl md:text-5xl italic cursor-pointer ">
//           StageGear
//         </h1>
//       </div>

//       {/* Mobile Menu Toggle (Hamburger) */}
//       <div className="md:hidden" onClick={toggleMobileMenu}>
//         <button className="text-3xl">☰</button>
//       </div>

//       {/* Nav Menu */}
//       <div
//         className={`flex flex-col md:flex-row md:space-x-14 items-center md:pr-16 space-y-4 md:space-y-0 ${
//           isMobileMenuOpen ? "block" : "hidden"
//         } md:block`}
//         onClick={closeMobileMenu}
//         id="nav-menu"
//       >
//         {navMenu.map((nav, idx) => (
//           <Link href={nav.link} key={idx} className="text-xl md:text-base">
//             {nav.name}
//           </Link>
//         ))}
//       </div>

//       {/* Social Icons */}
//       <div className="flex space-x-4 items-center mt-4 md:mt-0">
//         <Link href="/facebook.com">
//           <Image
//             src="/icons/facebook.png"
//             alt="facebook"
//             height={40}
//             width={40}
//           />
//         </Link>
//         <Link href="/instagram.com">
//           <Image
//             src="/icons/instagram.png"
//             alt="instagram"
//             height={40}
//             width={40}
//           />
//         </Link>
//         <Link href="/youtube.com">
//           <Image
//             src="/icons/youtube.png"
//             alt="youtube"
//             height={40}
//             width={40}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navMenu = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "EQUIPMENT", link: "/equipment" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly w-full p-4 bg-black text-white uppercase font-bold">
      {/* Logo */}
      <div className="flex justify-start items-center" id="nav-logo">
        <h1 className="font-extrabold text-3xl md:text-5xl italic cursor-pointer ">
          StageGear
        </h1>
      </div>

      {/* Mobile Menu Toggle (Hamburger) */}
      <div className="md:hidden" onClick={toggleMobileMenu}>
        <button className="text-3xl">☰</button>
      </div>

      {/* Nav Menu */}
      <div
        className={`flex flex-col md:flex-row md:space-x-14 items-center md:pr-16 space-y-4 md:space-y-0 ${
          isMobileMenuOpen ? "block" : "hidden"
        } md:block`}
        id="nav-menu"
      >
        {navMenu.map((nav, idx) => (
          <Link
            href={nav.link}
            key={idx}
            className="text-xl md:text-base"
            onClick={closeMobileMenu}
          >
            {nav.name}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 items-center mt-4 md:mt-0">
        <Link href="https://www.facebook.com">
          <Image
            src="/icons/facebook.png"
            alt="facebook"
            height={40}
            width={40}
          />
        </Link>
        <Link href="https://www.instagram.com">
          <Image
            src="/icons/instagram.png"
            alt="instagram"
            height={40}
            width={40}
          />
        </Link>
        <Link href="https://www.youtube.com">
          <Image
            src="/icons/youtube.png"
            alt="youtube"
            height={40}
            width={40}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
