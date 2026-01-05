"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4B6F44]/90 backdrop-blur-md text-white py-4">
      <div className="section-container flex items-center justify-between">
        <Image width={100} height={50} src="/images/luaro 1.png" alt="Logo" /> 
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[var(--accent-green)] transition-colors">Home</Link>
          <Link href="#about" className="hover:text-[var(--accent-green)] transition-colors">About Us</Link>
          <Link href="#services" className="hover:text-[var(--accent-green)] transition-colors">Services</Link>
          <Link href="#shop" className="hover:text-[var(--accent-green)] transition-colors">Shop</Link>
          <Link href="#pages" className="hover:text-[var(--accent-green)] transition-colors">Pages</Link>
        </div>

        <button 
          onClick={scrollToFooter}
          className="btn-primary bg-white text-[var(--primary-green)] hover:bg-[var(--accent-green)] hover:text-white"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}
