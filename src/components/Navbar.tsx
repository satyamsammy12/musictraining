"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
         
            <div className="flex flex-col space-y-4 text-sm rounded shadow-lg p-4">
              <HoveredLink href="/all-courses">All Courses</HoveredLink>
              <HoveredLink href="/basic-music-theory">Basic Music Theory</HoveredLink>
              <HoveredLink href="/advanced-composition">Advance Composition</HoveredLink>
              <HoveredLink href="/song-writing">Song Writing</HoveredLink>
              <HoveredLink href="/music-production">Music Production</HoveredLink>
            </div>
         
        </MenuItem>

        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
