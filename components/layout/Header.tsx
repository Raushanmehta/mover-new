"use client";

import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Topbar: collapses and hides smoothly on scroll */}
      <div
        className={`hidden md:block transition-all duration-300 ease-in-out overflow-hidden ${
          isScrolled
            ? "max-h-0 opacity-0 -translate-y-full pointer-events-none"
            : "max-h-16 opacity-100 translate-y-0"
        }`}
      >
        <Topbar />
      </div>

      {/* Navbar: remains sticky at top */}
      <div className={`transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
        <Navbar />
      </div>
    </header>
  );
}
