import React from "react";
import { FaLightbulb, FaBriefcase } from "react-icons/fa";

const OurValueSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Section */}
        <div className="md:col-span-1">
          <p className="text-green-600 font-semibold text-xl mb-3">OUR VALUE</p>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Recruitment company <br />
            work with effectiveness.
          </h2>
          <p className="text-gray-500 text-lg">
            Ligula leo ipsum aliquam sem vel fames feugiat consequat platea nec
            placerat. Bibendum pulvinar taciti dignissim at tempor conubia
            placerat arcu cursus.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-white rounded-3xl shadow-md min-h-[380px] max-w-md p-6 text-center transition-all duration-300 hover:bg-green-300 hover:text-white group cursor-pointer">
  <FaLightbulb className="text-green-600 text-5xl mx-auto mb-6 transition-colors duration-300 group-hover:text-white" />
  <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Our Vision</h3>
  <p className="text-gray-600 text-lg group-hover:text-white">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  </p>
</div>


        {/* Our Mission */}
       <div className="bg-white rounded-3xl shadow-lg min-h-[380px] max-w-md p-6  text-center transition-all duration-300 hover:bg-green-300 hover:text-white group cursor-pointer">
  <FaBriefcase className="text-green-600 text-5xl mx-auto mb-6 transition-colors duration-300 group-hover:text-white" />
  <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Our Mission</h3>
  <p className="text-gray-600 text-lg group-hover:text-white">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  </p>
</div>

      </div>
    </section>
  );
};

export default OurValueSection;
