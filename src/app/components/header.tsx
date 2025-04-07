"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FiUser } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface NavItem {
  label: string;
  hasDropdown?: boolean;
  href?: string;
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Pages', hasDropdown: true },
    { label: 'Blog', href: '/blog' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact', href: '/contact' }
  ];

  const pagesDropdownItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Team', href: '/team' }
  ];

  const toggleMobileMenu = () => {
    // Only toggle mobile menu state
    setMobileMenuOpen(prev => !prev);
  };

  const togglePagesDropdown = () => {
    setPagesDropdownOpen(prev => !prev);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close menus if clicked outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        if (hamburgerButtonRef.current && !hamburgerButtonRef.current.contains(event.target as Node)) {
          closeAllMenus();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="w-full bg-[#0a0f09] sticky top-0 z-50">
        <div className="container mx-auto h-[70px] flex items-center justify-between px-4">
          {/* Logo and Desktop Nav */}
          <div className="flex items-center space-x-10">
            <h1 className="text-purple-900 text-3xl font-bold hover:scale-105 transition-transform">
              VR-World
            </h1>
            
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={togglePagesDropdown}
                        className="flex items-center text-white hover:text-purple-500 transition-colors"
                      >
                        {item.label}
                        <span className="ml-1">
                          {pagesDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                      </button>
                      {pagesDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-[#1a1f19] border border-purple-700 rounded-md shadow-lg py-1 z-50">
                          {pagesDropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-white hover:bg-purple-900"
                              onClick={closeAllMenus}
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-white hover:text-purple-500 transition-colors"
                      onClick={closeAllMenus}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button 
              aria-label="User account"
              className="p-1 text-white hover:text-purple-500 transition-colors"
            >
              <FiUser size={20} />
            </button>
            
            <button 
              aria-label="Shopping cart"
              className="p-1 text-white hover:text-purple-500 transition-colors"
            >
              <TiShoppingCart size={20} />
            </button>
            
            <button
              ref={hamburgerButtonRef}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMobileMenu}
              className="p-1 text-white hover:text-purple-500 transition-colors lg:hidden"
            >
              {mobileMenuOpen ? <GiCrossMark size={20} /> : <GiHamburgerMenu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed top-[70px] left-0 w-full bg-[#1a1f19] z-40 shadow-lg animate-fadeIn"
        >
          <nav className="px-4 py-3">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={togglePagesDropdown}
                        className="w-full flex justify-between items-center py-2 text-white hover:text-purple-500"
                      >
                        {item.label}
                        {pagesDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </button>
                      {pagesDropdownOpen && (
                        <ul className="pl-4 mt-2 space-y-2 border-l border-purple-700">
                          {pagesDropdownItems.map((dropdownItem) => (
                            <li key={dropdownItem.label}>
                              <a
                                href={dropdownItem.href}
                                className="block py-1.5 text-gray-300 hover:text-purple-500 pl-3"
                                onClick={closeAllMenus}
                              >
                                {dropdownItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 text-white hover:text-purple-500"
                      onClick={closeAllMenus}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;