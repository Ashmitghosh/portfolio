import React from 'react';
import { SOCIAL_MEDIA_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
      <div className='flex items-center justify-center'>
        <div className='flex items-center justify-center gap-8'>
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel='noopener noreferrer'
              className='text-xl' 
              whileHover={{ scale: 1.2, rotate: 15 }} 
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
