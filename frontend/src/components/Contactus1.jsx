import React from 'react';
import { motion } from 'framer-motion';

const Contactus1 = () => {
  return (
    <section
      className="relative bg-[url('https://legacypartners.in/uploads/images/blog/how-to-ensure-the-success-of-your-next-board-meeting.png')] bg-cover bg-center bg-no-repeat min-h-[40vh] flex flex-col items-center justify-center text-white text-center px-4"
    >
      {/* Dark Overlay */}
      <div className="w-full h-full absolute top-0 left-0 z-0 bg-black/50"></div>

      <div className="relative z-10 max-w-2xl">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Contact us
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-3xl md:text-4xl"
        >
          We would love to hear from you.
        </motion.p>
      </div>
    </section>
  );
};

export default Contactus1;
