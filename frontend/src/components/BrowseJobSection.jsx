import React from "react";
import { motion } from 'framer-motion';

const BrowseJobSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e')",
      }}
    >
      <div className="bg-black/60 w-full h-full py-24 px-4 md:px-20 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  Contact us
                </motion.h1>
        <motion.p className="text-lg max-w-2xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </motion.p>

        {/* Search Form */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-5xl">
          <input
            type="text"
            placeholder="Find the job title, company, keyword"
            className="flex-[2] h-14 px-5 rounded-md text-black bg-white outline-none"
          />
          <input
            type="text"
            placeholder="City/ Country"
            className="flex-1 h-14 px-5 rounded-md text-black bg-white outline-none"
          />
          <select className="flex-1 h-14 px-5 rounded-md text-black bg-white outline-none">
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Remote</option>
          </select>
          <button className="flex-1 h-14 bg-green-300 text-white rounded-md font-semibold  transition">
            SEARCH JOB
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrowseJobSection;
