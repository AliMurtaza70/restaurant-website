"use client";

import Link from "next/link";
import "./navbar.css";
import { redirect, usePathname } from "next/navigation";

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Menu", href: "/menu" },
  { id: 4, name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="main">
      <div className="container">
        <div className="contentBox">
          <h1 className="navHeading">RESTAURANT</h1>
          <div className="navLinks">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  className="link"
                  style={{
                    color: isActive ? "#cda45e" : "white",
                  }}
                  key={link.id}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <button className="navButton" onClick={() => redirect("book-table")}>
            Book A Table
          </button>
        </div>
      </div>
    </div>
  );
}
