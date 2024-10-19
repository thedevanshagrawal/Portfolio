'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    // <header>
    //   <nav role="navigation">
    //     <div className="left">Devansh's Portfolio</div>
    //     <div className="right">
    //       <ul>
    //         <li>
    //           <Link href="#home">Home</Link>
    //         </li>
    //         <li>
    //           <Link href="#about">About</Link>
    //         </li>
    //         <li>
    //           <Link href="#project">Projects</Link>
    //         </li>
    //         <li>
    //           <Link href="#contact-page">Contact Me</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </header>

    <div
    className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
          >
          </MenuItem>
        </Link>
        <Link href={"/ProjectSection"}>
          <MenuItem
          setActive={setActive}
          active={active}
          item="Project"
          >
          </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Us"
          >
          </MenuItem>
        </Link>
      </Menu>
  </div>

  );
}

export default Navbar;
