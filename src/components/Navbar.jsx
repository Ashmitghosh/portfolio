import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';  // Correct import for FaBars
import { NAVIGATION_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className='fixed left-0 right-0 top-4 z-50'>
        <div className='mx-auto hidden max-w-2xl items-center justify-center rounded lg:border lg:border-stone-50/30 lg:bg-black/20 lg:py-3 lg:backdrop-blur-lg lg:flex'>
          <div className='flex items-center justify-between gap-6'>
            <ul className='flex items-center gap-4'>
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <motion.a
                    className='text-2xl text-white hover:text-yellow-500'
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    whileHover={{ scale: 1.1, color: '#f59e0b' }} // Hover effect: scale up and change color
                    transition={{ duration: 0.3 }} // Animation duration
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile Menu Toggle Button */}
        <div className='lg:hidden'>
          <button
            className='flex items-center justify-center p-2 focus:outline-none'
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className='h-6 w-6' />
            ) : (
              <FaBars className='h-6 w-6' />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='fixed top-16 left-0 right-0 bg-black/50 backdrop-blur-md flex flex-col gap-4 p-4 lg:hidden'
            >
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <motion.a
                    className='block w-full text-lg text-white hover:text-yellow-500'
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    whileHover={{ scale: 1.1, color: '#f59e0b' }} // Hover effect
                    transition={{ duration: 0.3 }} // Animation duration
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
