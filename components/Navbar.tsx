"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-20 transition-all duration-500 ease-in-out ${
                isScrolling ? "bg-sky-400 shadow-md" : "bg-transparent"
            }`}
        >
            
            <div className="container mx-auto flex justify-between items-center py-4 px-5 lg:px-10">
                <Link href="/" className="text-3xl font-extrabold text-blue-700">
                    team<span className="text-white">.</span>
                </Link>
                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    <Link
                        href="/product"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                        Product
                    </Link>
                    <Link
                        href="/blog"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/support"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                        Support
                    </Link>
                    <Link
                        href="/login"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                        Log In
                    </Link>
                    <button className="bg-blue-600 bg-opacity-50 text-white pb-2 pt-1 px-8 rounded-lg hover:bg-opacity-70 transition-transform duration-200 transform hover:-translate-y-1">
                        Get Access
                    </button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-800 text-white space-y-6 py-8">
                    <Link href="/product" className="text-lg" onClick={toggleMenu}>
                        Product
                    </Link>
                    <Link href="/blog" className="text-lg" onClick={toggleMenu}>
                        Blog
                    </Link>
                    <Link href="/support" className="text-lg" onClick={toggleMenu}>
                        Support
                    </Link>
                    <Link href="/login" className="text-lg" onClick={toggleMenu}>
                        Log In
                    </Link>
                    <button
                        className="bg-blue-600 bg-opacity-50 text-white py-2 px-8 rounded-lg hover:bg-opacity-70 transition-transform duration-200 transform hover:-translate-y-1"
                        onClick={toggleMenu}
                    >
                        Get Access
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
