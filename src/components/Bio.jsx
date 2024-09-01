import React from 'react';
import { BIO } from '../constants';
import { motion } from 'framer-motion';

const Bio = () => {
  return (
    <section className='flex max-w-4xl flex-col gap-12 pt-20' id="bio">
      <motion.h1
        className='text-center text-3xl lg:text-4xl'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <div>
        {BIO.map((bio, index) => (
          <motion.p
            key={index}
            className="mb text-lg lg:text-xl"
            whileHover={{ scale: 1.05, color: '#FFD700' }}
            transition={{ duration: 0.3 }}
          >
            {bio}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default Bio;
