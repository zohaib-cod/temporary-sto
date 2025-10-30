"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="relative w-full bg-orange-200 text-white shadow-lg">
      {/* Cursor Follower */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none mix-blend-difference"
        animate={{ x: cursorPos.x - 12, y: cursorPos.y - 12 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/black-logo2.png" alt="Stowave" width={100} height={100} />
          {/* <h1 className="text-xl font-bold tracking-wide">Stowave</h1> */}
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-semibold">
          <Link href="/">Home</Link>
          <Link href="#shop">Shop</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border border-gray-500 px-3 py-2 rounded-lg"
        >
          ☰
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center gap-3 py-4 bg-gray-900 md:hidden"
        >
          <Link href="/">Home</Link>
          <Link href="#shop">Shop</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </motion.div>
      )}
    </div>
  );
}
